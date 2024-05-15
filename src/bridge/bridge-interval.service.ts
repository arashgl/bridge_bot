import { Injectable, Logger } from '@nestjs/common';
import { BigNumber, ethers } from 'ethers';
import { TransactionReceipt } from '@ethersproject/providers';
import { NetworkEnum } from '../transactions/network.enum';
import { Bridge } from '../abi/typechain-types';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { EthersProvider } from '../ethers/ethers.provider';
import { WalletProvider } from '../ethers/wallet.provider';
import { TransactionService } from '../transactions/transaction.service';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { BridgeService } from './bridge.service';
import { TransferTypeEnum } from '../transactions/transfer-type.enum';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class BridgeIntervalService {
  private readonly bsc_bridge: Bridge;
  private readonly confirmationBlock: number;
  constructor(
    private readonly configService: ConfigService<Env>,
    private readonly ethersProvider: EthersProvider,
    private readonly walletProvider: WalletProvider,
    private readonly transactionService: TransactionService,
    private readonly bridgeService: BridgeService,
  ) {
    //** BSC Initializer **//
    this.bsc_bridge = new ethers.Contract(
      this.configService.getOrThrow('BSC_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      walletProvider.bsc_wallet,
    ) as Bridge;
    this.confirmationBlock = +this.configService.getOrThrow(
      'CONFIRMATION_BLOCKS',
    );
  }

  @Interval(60000)
  async transferFromBscListener() {
    const block_number =
      await this.ethersProvider.bscTestnetProvider.getBlockNumber();
    const filter = this.bsc_bridge.filters.Transfer();
    const events = await this.bsc_bridge.queryFilter(
      filter,
      block_number - 40000,
    );
    for (const event of events) {
      if (event.blockNumber + +this.confirmationBlock < block_number) {
        this.transactionService
          .findOne({
            where: {
              tx_hash: event.transactionHash,
            },
          })
          .then(async (wallet_transaction) => {
            if (!wallet_transaction) {
              const res = await this.bridgeService.transferToPolygon(
                event.args[1],
                event.args[3],
                event.args[4],
                true,
              );
              if (res)
                Logger.log(`TransferFromBSC ID:${res.id}`, 'IntervalService');
            }
          });
      }
    }
  }
  @Interval(60000)
  async transferFromFullBscListener() {
    const block_number =
      await this.ethersProvider.bscTestnetProvider.getBlockNumber();
    const filter = this.bsc_bridge.filters.FullTransfer();
    const events = await this.bsc_bridge.queryFilter(
      filter,
      block_number - 40000,
    );
    for (const event of events) {
      if (event.blockNumber + +this.confirmationBlock < block_number) {
        this.transactionService
          .findOne({
            where: {
              tx_hash: event.transactionHash,
            },
          })
          .then(async (wallet_transaction) => {
            if (!wallet_transaction) {
              const res = await this.bridgeService.transferFullToPolygon(
                event.args[4],
                event.args[3],
                event.args[5],
                event.args[1],
                event.args[6],
              );

              if (res)
                Logger.log(`TransferFullFromBSC ${res.id}`, 'IntervalService');
            }
          });
      }
    }
  }

  @Interval(60000)
  async transferNFTFromBscListener() {
    const block_number =
      await this.ethersProvider.bscTestnetProvider.getBlockNumber();
    const filter = this.bsc_bridge.filters.TransferNFT();
    const events = await this.bsc_bridge.queryFilter(
      filter,
      block_number - 40000,
    );
    for (const event of events) {
      if (event.blockNumber + +this.confirmationBlock < block_number) {
        this.transactionService
          .findOne({
            where: {
              tx_hash: event.transactionHash,
            },
          })
          .then(async (wallet_transaction) => {
            if (!wallet_transaction) {
              const res = await this.bridgeService.transferLandToPolygon(
                event.args[1],
                event.args[2],
              );

              if (res)
                Logger.log(`TransferLandFromBSC ${res.id}`, 'IntervalService');
            }
          });
      }
    }
  }
}
