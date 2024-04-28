import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { EthersModule } from '../ethers/ethers.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { BridgeListenersService } from './bridge-listeners.service';

@Module({
  imports: [EthersModule, TransactionsModule],
  providers: [BridgeService, BridgeListenersService],
  exports: [BridgeService, BridgeListenersService],
})
export class BridgeModule {}
