import { Module } from '@nestjs/common';
import { BlockchainBridgeService } from './blockchain-bridge.service';

@Module({
  providers: [BlockchainBridgeService],
  exports: [BlockchainBridgeService],
})
export class BlockchainModule {}
