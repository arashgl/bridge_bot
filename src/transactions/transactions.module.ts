import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [TransactionService],
  exports: [TransactionService],
})
export class TransactionsModule {}
