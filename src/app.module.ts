import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
process.on('unhandledRejection', (reason, promise) => {
  // You can optionally log the error or take other appropriate actions here
});
@Module({
  imports: [
    BlockchainModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [AppService],
})
export class AppModule {}
