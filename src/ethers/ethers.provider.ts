import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EthersProvider {
  public hardHatProvider: ethers.providers.JsonRpcProvider;
  public polygonProvider: ethers.providers.JsonRpcProvider;
  public mumbaiProvider: ethers.providers.JsonRpcProvider;
  public bscMainnetProvider: ethers.providers.JsonRpcProvider;
  public bscTestnetProvider: ethers.providers.JsonRpcProvider;
  public sepoliaProvider: ethers.providers.JsonRpcProvider;

  constructor(private configService: ConfigService) {
    // Initialize your Ethereum provider here
    this.hardHatProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('HARDHAT'),
    ); // Customize this URL for Hardhat
    this.sepoliaProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('SEPOLIA'),
    );
    this.polygonProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('POLYGON'),
    );
    this.mumbaiProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('MUMBAI'),
    ); // Mumbai testnet URL

    this.bscMainnetProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('BSC_MAINNET'),
    ); // BSC Mainnet

    this.bscTestnetProvider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('BSC_TESTNET'),
    ); // BSC Testnet
  }
}
