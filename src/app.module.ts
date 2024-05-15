import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BridgeModule } from './bridge/bridge.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TransactionsModule } from './transactions/transactions.module';
import { DatabaseModule } from './database/database.module';
process.on('unhandledRejection', (reason, promise) => {
  // You can optionally log the error or take other appropriate actions here
});
@Module({
  imports: [
    BridgeModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TransactionsModule,
    DatabaseModule,
  ],
  providers: [AppService],
})
export class AppModule {}
