import { Injectable, Logger } from '@nestjs/common';
import { TransactionService } from '../transactions/transaction.service';
import { BridgeService } from './bridge.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TransferTypeEnum } from '../transactions/transfer-type.enum';
import { TransferStatusEnum } from '../transactions/enums/transfer-status.enum';
import { NetworkEnum } from '../transactions/enums/network.enum';

@Injectable()
export class BridgeIntervalService {
  private isProcessing = false;
  private isProcessingNFT = false;
  private isProcessingFull = false;

  constructor(
    private readonly transactionService: TransactionService,
    private readonly bridgeService: BridgeService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async transferFromBsc() {
    if (this.isProcessing) return;
    this.isProcessing = true;
    try {
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
    } catch (e) {
      Logger.error(e, 'BridgeIntervalService: transferFromBsc');
    } finally {
      this.isProcessing = true;
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async transferNFTFromBscListener() {
    if (this.isProcessingNFT) return;
    this.isProcessingNFT = true;
    try {
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
    } catch (e) {
      Logger.error(e, 'BridgeIntervalService: transferNFTFromBscListener');
    } finally {
      this.isProcessingNFT = false;
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async transferFromFullBscListener() {
    if (this.isProcessingFull) return;
    this.isProcessingFull = true;
    try {
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
    } catch (e) {
      Logger.error(e, 'BridgeIntervalService: transferFromFullBscListener');
    } finally {
      this.isProcessingFull = false;
    }
  }
}
