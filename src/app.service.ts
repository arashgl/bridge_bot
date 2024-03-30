import { Injectable } from '@nestjs/common';
import { BlockchainBridgeService } from './blockchain/blockchain-bridge.service';

@Injectable()
export class AppService {
  constructor(private readonly blockChainService: BlockchainBridgeService) {}

  async listenForConnections() {
    await this.blockChainService.listenForConnectionsInBsc();
  }
}
