import { Injectable, Logger } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { Bridge, NFTLand, StakeMeta } from '../abi/typechain-types';
import { EthersProvider } from '../ethers/ethers.provider';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { abi as StakeAbi } from 'src/abi/contracts/StakeMeta.sol/StakeMeta.json';
import { abi as NFTLandAbi } from 'src/abi/contracts/NFT.sol/NFTLand.json';
import { WalletProvider } from '../ethers/wallet.provider';
import { TransactionService } from '../transactions/transaction.service';

import { Transaction } from '../transactions/transaction.entity';
import { TransferStatusEnum } from '../transactions/enums/transfer-status.enum';

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

  async transferFullToPolygon(transaction: Transaction) {
    try {
      const res = await this.polygon_bridge.fullTransferToPolygon(
        ethers.utils.parseEther(transaction.uvm_amount),
        ethers.utils.parseEther(transaction.dnm_amount),
        transaction.land_id,
        transaction.stake_duration,
        transaction.recipient_address,
        { gasLimit: 100000 },
      );

      if (res.hash) {
        console.log('Waiting for Stake');
        await res.wait();
        console.log('Finished for Stake');
        transaction.status = TransferStatusEnum.Success;
        await transaction.save();
        Logger.log({ stakedAddress: res.to }, '<<< Staked');
        return transaction;
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'transferFullToPolygon',
      );
      console.log(err);
      transaction.status = TransferStatusEnum.Pending;
      await transaction.save();
    }
  }

  async transferLandToPolygon(transaction: Transaction) {
    try {
      const myWalletAddress = this.walletProvider.polygon_wallet.address;
      console.log(
        {
          myWalletAddress,
          sender: transaction.recipient_address,
          landID: transaction.land_id,
        },
        '<<<<<LAND',
      );
      const res = await this.polygon_bridge.transferNFTtoPolygon(
        BigNumber.from(transaction.land_id),
        transaction.recipient_address,
        {
          gasLimit: 350000,
        },
      );
      if (res.hash) {
        await res.wait();
        transaction.status = TransferStatusEnum.Success;
        await transaction.save();
        Logger.log(
          { from: res?.from, to: res?.to },
          'transferLandToPolygonFinished',
        );
        return transaction;
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'transferLandToPolygon',
      );
      console.log(err);
      transaction.status = TransferStatusEnum.Pending;
      await transaction.save();
    }
  }

  async transferToPolygon(transaction: Transaction) {
    try {
      const tokenAddress = transaction.token_address;
      const amount = ethers.utils.parseEther(transaction.amount);
      const token_address =
        tokenAddress === this.uvm_bsc
          ? this.uvm_polygon
          : tokenAddress === this.dnm_bsc
            ? this.dnm_polygon
            : null;

      console.log(tokenAddress, this.uvm_bsc);
      if (!token_address) throw new Error('Invalid Token Address');
      console.log('1');
      const res = await this.polygon_bridge.transferToPolygon(
        token_address,
        transaction.recipient_address,
        BigNumber.from(amount),
        { gasLimit: 100000 },
      );
      console.log('2');
      Logger.log(res?.to, 'TransferToPolygon');
      if (res.hash) {
        console.log('3');
        const result = await res.wait();
        transaction.status = TransferStatusEnum.Success;
        await transaction.save();
        console.log('4');
        Logger.log(
          { from: result?.from, to: result?.to },
          'TransferToPolygonFinished',
        );
        return transaction;
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'TransferToPolygon',
      );
      console.log(err);
      transaction.status = TransferStatusEnum.Pending;
      await transaction.save();
    }
  }
}
