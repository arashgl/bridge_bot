import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { EthersModule } from '../ethers/ethers.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { BridgeIndexerService } from './bridge-indexer.service';
import { BridgeIntervalService } from './bridge-interval.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Env } from '../../environments';

@Module({
  imports: [
    EthersModule,
    TransactionsModule,
    ScheduleModule.forRoot(),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Env>) => ({
        timeout: 40000,
        maxRedirects: 5,
        baseURL:
          configService.getOrThrow('NET_MODE') === 'TEST'
            ? 'https://api-testnet.bscscan.com'
            : '`https://api.bscscan.com',
      }),
    }),
  ],
  providers: [BridgeService, BridgeIndexerService, BridgeIntervalService],
  exports: [BridgeService, BridgeIndexerService],
})
export class BridgeModule {}
