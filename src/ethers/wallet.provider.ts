import { Injectable } from '@nestjs/common';
import { Env } from '../../environments';
import { ConfigService } from '@nestjs/config';
import { EthersProvider } from './ethers.provider';
import { ethers } from 'ethers';

@Injectable()
export class WalletProvider {
  public readonly polygon_wallet: ethers.Wallet;
  public readonly bsc_wallet: ethers.Wallet;

  constructor(
    configService: ConfigService<Env>,
    ethersProvider: EthersProvider,
  ) {
    const env = configService.getOrThrow('NODE_ENV');
    this.bsc_wallet = new ethers.Wallet(
      configService.getOrThrow('ORIGIN_PRIVATE_KEY'),
      env === 'DEVELOPMENT'
        ? ethersProvider.sepoliaProvider
        : ethersProvider.bscMainnetProvider,
    );
    this.polygon_wallet = new ethers.Wallet(
      configService.getOrThrow('ORIGIN_PRIVATE_KEY'),
      env === 'DEVELOPMENT'
        ? ethersProvider.mumbaiProvider
        : ethersProvider.polygonProvider,
    );
  }
}
