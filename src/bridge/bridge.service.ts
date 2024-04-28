import { Injectable, Logger } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { Bridge, NFTLand, StakeMeta, Token } from '../abi/typechain-types';
import { EthersProvider } from '../ethers/ethers.provider';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { abi as StakeAbi } from 'src/abi/contracts/StakeMeta.sol/StakeMeta.json';
import { abi as NFTLandAbi } from 'src/abi/contracts/NFT.sol/NFTLand.json';
import { abi as TokenAbi } from 'src/abi/contracts/Token.sol/Token.json';
import { WalletProvider } from '../ethers/wallet.provider';
import { TransactionService } from '../transactions/transaction.service';
import { NetworkEnum } from '../transactions/network.enum';
import { TransferTypeEnum } from '../transactions/transfer-type.enum';

@Injectable()
export class BridgeService {
  private readonly polygon_bridge: Bridge;
  private readonly stake_contract: StakeMeta;
  private readonly nft_contract: NFTLand;

  private readonly uvm_bsc: string;
  private readonly uvm_polygon: string;
  private readonly dnm_polygon: string;
  private readonly dnm_bsc: string;

  constructor(
    private readonly configService: ConfigService<Env>,
    private readonly ethersProvider: EthersProvider,
    private readonly walletProvider: WalletProvider,
    private readonly transactionService: TransactionService,
  ) {
    this.uvm_bsc = this.configService.getOrThrow('BSC_UVM_ADDRESS');
    this.uvm_polygon = this.configService.getOrThrow('POLYGON_UVM_ADDRESS');

    this.dnm_polygon = this.configService.getOrThrow('POLYGON_DNM_ADDRESS');
    this.dnm_bsc = this.configService.getOrThrow('BSC_DNM_ADDRESS');

    //** Polygon Initializer **//
    this.polygon_bridge = new ethers.Contract(
      this.configService.getOrThrow('POLYGON_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      walletProvider.polygon_wallet,
    ) as Bridge;

    this.nft_contract = new ethers.Contract(
      this.configService.getOrThrow('POLYGON_NFT_ADDRESS'),
      NFTLandAbi,
      walletProvider.polygon_wallet,
    ) as NFTLand;

    //** Stake Initializer **//

    this.stake_contract = new ethers.Contract(
      this.configService.getOrThrow('POLYGON_STAKE_ADDRESS'),
      StakeAbi,
      walletProvider.polygon_wallet,
    ) as StakeMeta;
  }

  async transferFullToPolygon(
    dnmAmount: BigNumber,
    uvmAmount: BigNumber,
    landId: BigNumber,
    sender: string,
    stakeDuration: BigNumber,
  ) {
    try {
      console.log({
        dnmAmount: ethers.utils.formatEther(dnmAmount),
        uvmAmount: ethers.utils.formatEther(uvmAmount),
        landId: ethers.utils.formatEther(landId),
        sender: sender,
        stakeDuration: ethers.utils.formatEther(stakeDuration),
      });
      let landOwner: string;
      try {
        landOwner = await this.nft_contract.ownerOf(landId);
      } catch (e) {}
      if (landOwner !== this.polygon_bridge.address) {
        const mint = await this.nft_contract.mint(
          this.polygon_bridge.address,
          landId,
          { gasLimit: 3000000 },
        );
        if (mint.hash) {
          await mint.wait();
          const owner = await this.nft_contract.ownerOf(landId);
          Logger.log({ mintedAddress: owner }, '<<< Mint');
        }
      }

      const res = await this.polygon_bridge.fullTransferToPolygon(
        uvmAmount,
        dnmAmount,
        landId,
        stakeDuration,
        sender,
        { gasLimit: 3_000_000 },
      );

      if (res.hash) {
        console.log('Waiting for Stake');
        await res.wait();
        console.log('Finished for Stake');
        await this.transactionService.createTransaction({
          from: res.from,
          to: res.to,
          tx_hash: res.hash,
          network: NetworkEnum.POLYGON,
          land_id: +ethers.utils.formatEther(landId),
          dnm_amount: ethers.utils.formatEther(dnmAmount),
          uvm_amount: ethers.utils.formatEther(uvmAmount),
          transfer_type: TransferTypeEnum.FullTransfer,
          stake_duration: +ethers.utils.formatEther(stakeDuration),
          is_event: true,
        });
        Logger.log({ stakedAddress: res.to }, '<<< Staked');
        // }
        // } else {
        // await this.transferLandToPolygon(landId, sender);
        // const res = await this.polygon_bridge.fullTransferToPolygon(
        //   BigNumber.from(uvmAmount),
        //   BigNumber.from(dnmAmount),
        //   BigNumber.from(landId),
        //   BigNumber.from(stakeDuration),
        //   sender,
        //   { gasLimit: 3000000 },
        // );
        // Logger.log(res?.to, 'transferFullToPolygon');
        // if (res.hash) {
        //   const result = await res.wait();
        //   await this.transactionService.createTransaction({
        //     from: result.from,
        //     to: result.to,
        //     tx_hash: res.hash,
        //     network: NetworkEnum.POLYGON,
        //     land_id: +ethers.utils.formatEther(landId),
        //     dnm_amount: ethers.utils.formatEther(dnmAmount),
        //     uvm_amount: ethers.utils.formatEther(uvmAmount),
        //     transfer_type: TransferTypeEnum.FullTransfer,
        //     stake_duration: +ethers.utils.formatEther(stakeDuration),
        //     is_event: true,
        //   });
        //   Logger.log(
        //     { from: result?.from, to: result?.to },
        //     'transferFullToPolygonFinished',
        //   );
        // }
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'transferFullToPolygon',
      );
      console.log(err);
    }
  }

  async transferLandToPolygon(landId: BigNumber, sender: string) {
    try {
      const myWalletAddress = this.walletProvider.polygon_wallet.address;
      const mint = await this.nft_contract.mint(sender, landId, {
        gasLimit: 3000000,
      });
      Logger.log(mint?.to, 'transferFullToPolygon');
      if (mint.hash) {
        await mint.wait();
        await this.transactionService.createTransaction({
          from: mint.from,
          to: mint.to,
          tx_hash: mint.hash,
          network: NetworkEnum.POLYGON,
          land_id: +ethers.utils.formatEther(landId),
          transfer_type: TransferTypeEnum.NFT,
          is_event: true,
        });
        Logger.log(
          { from: mint?.from, to: mint?.to },
          'transferFullToPolygonFinished',
        );
      } else {
        const owner = await this.nft_contract.ownerOf(landId);
        if (owner === sender) {
          throw new Error('Mint transaction failed');
        }
        if (owner === this.walletProvider.polygon_wallet.address) {
          const res = await this.nft_contract.transferFrom(
            myWalletAddress,
            sender,
            landId,
          );
          if (res.hash) {
            await res.wait();
            await this.transactionService.createTransaction({
              from: mint.from,
              to: mint.to,
              tx_hash: mint.hash,
              network: NetworkEnum.POLYGON,
              land_id: +ethers.utils.formatEther(landId),
              transfer_type: TransferTypeEnum.NFT,
              is_event: true,
            });
            Logger.log(
              { from: res?.from, to: res?.to },
              'transferLandToPolygonFinished',
            );
          }
        }
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'transferFullToPolygon',
      );
      console.log(err);
    }
  }

  async transferToPolygon(
    address: string,
    amount: BigNumber,
    tokenAddress: string,
  ): Promise<any> {
    try {
      const token_address =
        tokenAddress === this.uvm_bsc
          ? this.uvm_polygon
          : tokenAddress === this.dnm_bsc
            ? this.dnm_polygon
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
