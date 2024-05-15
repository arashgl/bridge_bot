import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { EthersModule } from '../ethers/ethers.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { BridgeListenersService } from './bridge-listeners.service';
import { BridgeIntervalService } from './bridge-interval.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [EthersModule, TransactionsModule, ScheduleModule.forRoot()],
  providers: [BridgeService, BridgeListenersService, BridgeIntervalService],
  exports: [BridgeService, BridgeListenersService],
})
export class BridgeModule {}
