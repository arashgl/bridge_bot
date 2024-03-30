import { Injectable, Logger } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import { BridgeAbi } from '../abi/Bridge';
import { Bridge } from '../types/Bridge.type';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';

@Injectable()
export class BlockchainBridgeService {
  private readonly polygon_provider: ethers.providers.JsonRpcProvider;
  private readonly polygon_wallet: ethers.Wallet;
  private readonly polygon_contract: Bridge;

  private readonly bsc_provider: ethers.providers.JsonRpcProvider;
  private readonly bsc_wallet: ethers.Wallet;
  private readonly bsc_contract: Bridge;

  constructor(private readonly configService: ConfigService<Env>) {
    //** Polygon Initializer **//
    this.polygon_provider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('POLYGON_NODE_URL'),
    );

    this.polygon_wallet = new ethers.Wallet(
      configService.getOrThrow('PRIVATE_KEY'),
      this.polygon_provider,
    );

    this.polygon_contract = new ethers.Contract(
      this.configService.getOrThrow('POLYGON_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      this.polygon_wallet,
    ) as Bridge;

    //** BSC Initializer **//
    this.bsc_provider = new ethers.providers.JsonRpcProvider(
      this.configService.getOrThrow('BSC_NODE_URL'),
    );

    this.bsc_wallet = new ethers.Wallet(
      configService.getOrThrow('PRIVATE_KEY'),
      this.bsc_provider,
    );

    this.bsc_contract = new ethers.Contract(
      this.configService.getOrThrow('BSC_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      this.bsc_wallet,
    ) as Bridge;
  }

  async listenForConnectionsInBsc() {
    this.bsc_contract.on(
      'Transfer',
      (sender: string, receiver, amount: string) => {
        console.log('Received<<<<<');
        this.transferToPolygon(sender, amount);
      },
    );
  }

  async transferToPolygon(address: string, amount: string): Promise<any> {
    try {
      const res = await this.polygon_contract.transferToPolygon(
        this.configService.getOrThrow('POLYGON_TOKEN_ADDRESS'),
        address,
        BigNumber.from(amount),
        { gasLimit: 3000000 },
      );
      console.log(res);
      Logger.log(res, 'TransferToPolygon');
      if (res.hash) {
        const result = await res.wait();
        Logger.log(result, 'TransferToPolygonFinished');
      }
    } catch (err) {
      Logger.error(
        err?.reason || err?.error?.reason || err,
        'TransferToPolygon',
      );
      console.log(err);
    }
  }
}
