import { Injectable, Logger } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { Bridge } from '../abi/typechain-types/contracts';
import { EthersProvider } from '../ethers/ethers.provider';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { WalletProvider } from '../ethers/wallet.provider';
import { TransactionService } from '../transactions/transaction.service';
import { NetworkEnum } from '../transactions/network.enum';
import { TransactionReceipt } from '@ethersproject/providers';

@Injectable()
export class BridgeService {
  private readonly polygon_bridge: Bridge;
  private readonly bsc_bridge: Bridge;

  constructor(
    private readonly configService: ConfigService<Env>,
    private readonly ethersProvider: EthersProvider,
    private readonly walletProvider: WalletProvider,
    private readonly transactionService: TransactionService,
  ) {
    //** Polygon Initializer **//
    this.polygon_bridge = new ethers.Contract(
      this.configService.getOrThrow('POLYGON_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      walletProvider.polygon_wallet,
    ) as Bridge;

    //** BSC Initializer **//
    this.bsc_bridge = new ethers.Contract(
      this.configService.getOrThrow('BSC_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      walletProvider.bsc_wallet,
    ) as Bridge;
  }

  async listenForConnectionsInBsc() {
    this.bsc_bridge.on(
      'Transfer',
      (
        sender: string,
        receiver: string,
        amount: BigNumber,
        tokenAddress: string,
        txReceipt: TransactionReceipt,
      ) => {
        Logger.log({ tokenAddress, sender, receiver, amount }, '<<<Transfer');
        this.ethersProvider.sepoliaProvider.on('block', (new_block_number) => {
          const events = this.ethersProvider.sepoliaProvider.listeners('block');
          if (
            new_block_number - txReceipt.blockNumber >
            +this.configService.getOrThrow('CONFIRMATION_BLOCKS')
          ) {
            console.log('CONFIRMED On ', new_block_number);
            this.ethersProvider.sepoliaProvider.removeListener(
              'block',
              events[0],
            );
            this.transactionService.createTransaction({
              from: sender,
              to: receiver,
              amount: ethers.utils.formatEther(amount),
              tx_hash: txReceipt.transactionHash,
              network: NetworkEnum.BSC,
              token_address: tokenAddress,
              is_event: true,
            });
            this.transferToPolygon(sender, amount, tokenAddress);
            return false;
          }
        });
      },
    );
    // this.bsc_bridge.on(
    //   'TestEvent',
    //   (sender: string, receiver, amount: string) => {
    //     console.log('TESTED!!');
    //     console.log(sender, receiver, amount);
    //   },
    // );
  }

  async transferToPolygon(
    address: string,
    amount: BigNumber,
    tokenAddress: string,
  ): Promise<any> {
    try {
      const uvm_bsc = this.configService.getOrThrow('BSC_UVM_ADDRESS');
      const uvm_polygon = this.configService.getOrThrow('POLYGON_UVM_ADDRESS');

      const dnm_polygon = this.configService.getOrThrow('POLYGON_DNM_ADDRESS');
      const dnm_bsc = this.configService.getOrThrow('BSC_DNM_ADDRESS');

      const token_address =
        tokenAddress === uvm_bsc
          ? uvm_polygon
          : tokenAddress === dnm_bsc
            ? dnm_polygon
            : null;

      if (!token_address) return;

      const res = await this.polygon_bridge.transferToPolygon(
        token_address,
        address,
        BigNumber.from(amount),
        { gasLimit: 3000000 },
      );
      Logger.log(res?.to, 'TransferToPolygon');
      if (res.hash) {
        const result = await res.wait();
        await this.transactionService.createTransaction({
          from: result.from,
          to: result.to,
          amount: ethers.utils.formatEther(amount),
          tx_hash: res.hash,
          network: NetworkEnum.POLYGON,
          token_address: tokenAddress,
          is_event: true,
        });
        Logger.log(
          { from: result?.from, to: result?.to },
          'TransferToPolygonFinished',
        );
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'TransferToPolygon',
      );
      console.log(err);
    }
  }
}
