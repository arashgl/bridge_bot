import { Injectable } from '@nestjs/common';
import { BridgeService } from './bridge/bridge.service';

@Injectable()
export class AppService {
  constructor(private readonly blockChainService: BridgeService) {}

  async listenForConnections() {
    await this.blockChainService.listenForConnectionsInBsc();
  }
}
