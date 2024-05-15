import { Injectable, Logger } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import { TransactionReceipt } from '@ethersproject/providers';
import { NetworkEnum } from '../transactions/network.enum';
import { Bridge } from '../abi/typechain-types';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { EthersProvider } from '../ethers/ethers.provider';
import { WalletProvider } from '../ethers/wallet.provider';
import { TransactionService } from '../transactions/transaction.service';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { BridgeService } from './bridge.service';
import { TransferTypeEnum } from '../transactions/transfer-type.enum';

@Injectable()
export class BridgeListenersService {
  private readonly bsc_bridge: Bridge;
  private readonly confirmationBlock: number;
  constructor(
    private readonly configService: ConfigService<Env>,
    private readonly ethersProvider: EthersProvider,
    private readonly walletProvider: WalletProvider,
    private readonly transactionService: TransactionService,
    private readonly bridgeService: BridgeService,
  ) {
    //** BSC Initializer **//
    this.bsc_bridge = new ethers.Contract(
      this.configService.getOrThrow('BSC_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      walletProvider.bsc_wallet,
    ) as Bridge;
    this.confirmationBlock = +this.configService.getOrThrow(
      'CONFIRMATION_BLOCKS',
    );
    this.listenForConnectionsInBsc().catch((e) => Logger.error(e));
  }

  async listenForConnectionsInBsc() {
    Logger.log('Listening For Connections In BSC', 'BridgeListenersService');
    this.transferFromBscListener();
    this.transferFromFullBscListener();
    this.transferNFTFromBscListener();
  }

  transferFromBscListener() {
    this.bsc_bridge.on(
      'Transfer',
      (
        id: number,
        sender: string,
        receiver: string,
        amount: BigNumber,
        tokenAddress: string,
        txReceipt: TransactionReceipt,
      ) => {
        Logger.log(
          { id, tokenAddress, sender, receiver, amount },
          '<<<Transfer',
        );
        this.ethersProvider.bscTestnetProvider.on(
          'block',
          (new_block_number) => {
            const events =
              this.ethersProvider.bscTestnetProvider.listeners('block');
            if (
              new_block_number - txReceipt.blockNumber >
              this.confirmationBlock
            ) {
              console.log('CONFIRMED On ', new_block_number);
              this.ethersProvider.bscTestnetProvider.removeListener(
                'block',
                events[0],
              );
              this.transactionService
                .createTransaction({
                  from: sender,
                  to: receiver,
                  amount: ethers.utils.formatEther(amount),
                  tx_hash: txReceipt.transactionHash,
                  network: NetworkEnum.BSC,
                  token_address: tokenAddress,
                  is_event: true,
                })
                .catch((e) => Logger.error(e));
              this.bridgeService
                .transferToPolygon(sender, amount, tokenAddress)
                .catch((e) => Logger.error(e));
              return false;
            }
          },
        );
      },
    );
  }

  transferFromFullBscListener() {
    this.bsc_bridge.on(
      'FullTransfer',
      (
        id: number,
        sender: string,
        receiver: string,
        uvmAmount: BigNumber,
        dnmAmount: BigNumber,
        landId: BigNumber,
        stakeDuration: BigNumber,
        txReceipt: TransactionReceipt,
      ) => {
        Logger.log(
          { id, dnmAmount, sender, receiver, uvmAmount, landId },
          '<<<TransferFull',
        );
        this.ethersProvider.bscTestnetProvider.on(
          'block',
          (new_block_number) => {
            const events =
              this.ethersProvider.bscTestnetProvider.listeners('block');
            if (
              new_block_number - txReceipt.blockNumber >
              +this.confirmationBlock
            ) {
              console.log('CONFIRMED On ', new_block_number);
              this.ethersProvider.bscTestnetProvider.removeListener(
                'block',
                events[0],
              );
              this.transactionService
                .createTransaction({
                  from: sender,
                  to: receiver,
                  amount: ethers.utils.formatEther(dnmAmount),
                  tx_hash: txReceipt.transactionHash,
                  network: NetworkEnum.BSC,
                  is_event: true,
                  transfer_type: TransferTypeEnum.FullTransfer,
                  uvm_amount: ethers.utils.formatEther(uvmAmount),
                  dnm_amount: ethers.utils.formatEther(dnmAmount),
                  land_id: +ethers.utils.formatEther(landId),
                  stake_duration: +ethers.utils.formatEther(stakeDuration),
                })
                .catch((e) => Logger.log(e));
              this.bridgeService
                .transferFullToPolygon(
                  dnmAmount,
                  uvmAmount,
                  landId,
                  sender,
                  stakeDuration,
                )
                .catch((e) => Logger.log(e));
              return false;
            }
          },
        );
      },
    );
  }

  transferNFTFromBscListener() {
    this.bsc_bridge.on(
      'TransferNFT',
      (
        id: BigNumber,
        landId: BigNumber,
        sender: string,
        receiver: string,
        txReceipt: TransactionReceipt,
      ) => {
        Logger.log({ id, sender, receiver, landId }, '<<<TransferNFT');
        const ID = setInterval(async () => {
          const new_block_number =
            await this.ethersProvider.bscTestnetProvider.getBlockNumber();
          if (
            new_block_number - txReceipt.blockNumber >
            +this.confirmationBlock
          ) {
            clearInterval(ID);
            console.log('CONFIRMED On ', new_block_number);
            // this.ethersProvider.bscTestnetProvider.removeListener(
            //     'block',
            //     events[0],
            // );
            this.transactionService
              .createTransaction({
                from: sender,
                to: receiver,
                tx_hash: txReceipt.transactionHash,
                network: NetworkEnum.BSC,
                is_event: true,
                transfer_type: TransferTypeEnum.NFT,
                land_id: +ethers.utils.formatEther(landId),
              })
              .catch((e) => Logger.error(e));
            this.bridgeService
              .transferLandToPolygon(landId, sender)
              .catch((e) => Logger.error(e));
            return false;
          }
        }, 5000);
        // this.ethersProvider.bscTestnetProvider.on(
        //   'block',
        //   (new_block_number) => {
        //     const events =
        //       this.ethersProvider.bscTestnetProvider.listeners('block');
        //
        //   },
        // );
      },
    );
  }
}
