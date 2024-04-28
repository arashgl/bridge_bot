import { Injectable } from '@nestjs/common';
import { BridgeListenersService } from './bridge/bridge-listeners.service';

@Injectable()
export class AppService {
  constructor(private readonly bridgeListenerService: BridgeListenersService) {}

  async listenForConnections() {
    await this.bridgeListenerService.listenForConnectionsInBsc();
  }
}
