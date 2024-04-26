// ethers.module.ts
import { Module } from '@nestjs/common';
import { EthersProvider } from './ethers.provider';
import { WalletProvider } from './wallet.provider';

@Module({
  providers: [EthersProvider, WalletProvider],
  exports: [EthersProvider, WalletProvider],
})
export class EthersModule {}
