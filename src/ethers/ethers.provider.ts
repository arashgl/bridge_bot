import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';

@Injectable()
export class EthersProvider {
  public hardHatProvider: ethers.providers.JsonRpcProvider;
  public polygonProvider: ethers.providers.JsonRpcProvider;
  public bscProvider: ethers.providers.JsonRpcProvider;
  public sepoliaProvider: ethers.providers.JsonRpcProvider;

  constructor(private configService: ConfigService<Env>) {
    const isTest = this.configService.getOrThrow('NET_MODE') === 'TEST';
    // Initialize your Ethereum provider here
    this.hardHatProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('HARDHAT'),
    ); // Customize this URL for Hardhat
    this.sepoliaProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('SEPOLIA'),
    );
    this.polygonProvider = new ethers.providers.JsonRpcProvider(
      isTest
        ? this.configService.getOrThrow('AMOY')
        : this.configService.getOrThrow('POLYGON'),
    );

    this.bscProvider = new ethers.providers.JsonRpcProvider(
      isTest
        ? this.configService.getOrThrow('BSC_TESTNET')
        : this.configService.getOrThrow('BSC_MAINNET'),
    ); // BSC Mainnet
  }
}
