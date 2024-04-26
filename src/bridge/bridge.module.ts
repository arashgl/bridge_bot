import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { EthersModule } from '../ethers/ethers.module';
import { TransactionsModule } from '../transactions/transactions.module';

@Module({
  imports: [EthersModule, TransactionsModule],
  providers: [BridgeService],
  exports: [BridgeService],
})
export class BridgeModule {}
