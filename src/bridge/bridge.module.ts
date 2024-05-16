import { Module } from '@nestjs/common';
import { BridgeService } from './bridge.service';
import { EthersModule } from '../ethers/ethers.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { BridgeListenersService } from './bridge-listeners.service';
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
        timeout: 10000,
        maxRedirects: 5,
        baseURL:
          configService.getOrThrow('NODE_ENV') === 'DEVELOPMENT'
            ? 'https://api-testnet.bscscan.com'
            : '`https://api.bscscan.com',
      }),
    }),
  ],
  providers: [BridgeService, BridgeListenersService, BridgeIntervalService],
  exports: [BridgeService, BridgeListenersService],
})
export class BridgeModule {}
