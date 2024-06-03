import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { Bridge } from '../abi/typechain-types';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { EthersProvider } from '../ethers/ethers.provider';
import { WalletProvider } from '../ethers/wallet.provider';
import { TransactionService } from '../transactions/transaction.service';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { BridgeService } from './bridge.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TransferTypeEnum } from '../transactions/transfer-type.enum';
import { TransferStatusEnum } from '../transactions/enums/transfer-status.enum';
import { NetworkEnum } from '../transactions/enums/network.enum';

@Injectable()
export class BridgeIntervalService {
  private readonly bsc_bridge: Bridge;
  private readonly confirmationBlock: number;
  constructor(
    private readonly configService: ConfigService<Env>,
    private readonly ethersProvider: EthersProvider,
    private readonly transactionService: TransactionService,
    private readonly bridgeService: BridgeService,
    walletProvider: WalletProvider,
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
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async transferFromBsc() {
    const pendingTransactions = await this.transactionService.findAll({
      where: {
        status: TransferStatusEnum.Pending,
        network: NetworkEnum.BSC,
        transfer_type: TransferTypeEnum.Transfer,
      },
    });
    for (const transaction of pendingTransactions) {
      transaction.status = TransferStatusEnum.Processing;
      await transaction.save();
      await this.bridgeService.transferToPolygon(transaction);
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async transferNFTFromBscListener() {
    const pendingTransactions = await this.transactionService.findAll({
      where: {
        status: TransferStatusEnum.Pending,
        network: NetworkEnum.BSC,
        transfer_type: TransferTypeEnum.NFT,
      },
    });
    for (const transaction of pendingTransactions) {
      transaction.status = TransferStatusEnum.Processing;
      await transaction.save();
      await this.bridgeService.transferLandToPolygon(transaction);
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async transferFromFullBscListener() {
    const pendingTransactions = await this.transactionService.findAll({
      where: {
        status: TransferStatusEnum.Pending,
        network: NetworkEnum.BSC,
        transfer_type: TransferTypeEnum.FullTransfer,
      },
    });
    for (const transaction of pendingTransactions) {
      transaction.status = TransferStatusEnum.Processing;
      await transaction.save();
      await this.bridgeService.transferFullToPolygon(transaction);
    }
  }
}
