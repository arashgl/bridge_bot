import { Injectable, Logger } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { Bridge, Wrapper } from '../abi/typechain-types';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { abi as WrapperAbi } from 'src/abi/contracts/Wrapper.sol/Wrapper.json';
import { WalletProvider } from '../ethers/wallet.provider';

import { Transaction } from '../transactions/transaction.entity';
import { TransferStatusEnum } from '../transactions/enums/transfer-status.enum';
import { TransactionService } from '../transactions/transaction.service';
import { NetworkEnum } from '../transactions/enums/network.enum';

@Injectable()
export class BridgeService {
  private readonly polygon_bridge: Bridge;
  private readonly polygon_wrapper: Wrapper;

  private readonly uvm_bsc: string;
  private readonly uvm_polygon: string;
  private readonly dnm_polygon: string;
  private readonly dnm_bsc: string;

  constructor(
    private readonly configService: ConfigService<Env>,
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

    this.polygon_wrapper = new ethers.Contract(
      this.configService.getOrThrow('POLYGON_WRAPPER_ADDRESS'),
      WrapperAbi,
      walletProvider.polygon_wallet,
    ) as Wrapper;
  }

  async transferFullToPolygon(transaction: Transaction) {
    try {
      console.log(
        ethers.utils.parseEther(transaction.uvm_amount).toString(),
        ethers.utils.parseEther(transaction.dnm_amount).toString(),
        transaction.land_id,
        transaction.stake_duration,
        transaction.recipient_address,
      );
      const res = await this.polygon_bridge.fullTransferToPolygon(
        ethers.utils.parseEther(transaction.uvm_amount),
        ethers.utils.parseEther(transaction.dnm_amount),
        transaction.land_id,
        transaction.stake_duration,
        transaction.recipient_address,
        { gasLimit: 1_000_000 },
      );

      if (res.hash) {
        console.log('Waiting for Stake');
        await res.wait();
        console.log('Finished for Stake');
        transaction.status = TransferStatusEnum.Success;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, ...new_tx } = transaction;
        await this.transactionService.createTransaction({
          ...new_tx,
          network: NetworkEnum.POLYGON,
          tx_hash: res.hash,
          recipient_address: res.to,
          block_number: res.blockNumber,
        });
        await transaction.save();
        Logger.log({ stakedAddress: res.to }, '<<< Staked');
        return transaction;
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'transferFullToPolygon',
      );
      for (const key in err) {
        console.log({ [key]: err[key] });
      }
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
        const result = await transaction.save();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, ...new_tx } = transaction;
        await this.transactionService.createTransaction({
          ...new_tx,
          network: NetworkEnum.POLYGON,
          tx_hash: res.hash,
          recipient_address: res.to,
          block_number: result?.block_number,
        });
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
        const final_result = await transaction.save();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, ...new_tx } = transaction;
        await this.transactionService.createTransaction({
          ...new_tx,
          network: NetworkEnum.POLYGON,
          tx_hash: res.hash,
          recipient_address: res.to,
          block_number: final_result?.block_number,
        });
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
    }
  }
}
