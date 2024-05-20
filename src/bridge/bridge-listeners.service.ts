import { Injectable, Logger } from '@nestjs/common';
import { ethers } from 'ethers';
import { NetworkEnum } from '../transactions/enums/network.enum';
import { Bridge } from '../abi/typechain-types';
import { ConfigService } from '@nestjs/config';
import { Env } from '../../environments';
import { WalletProvider } from '../ethers/wallet.provider';
import { TransactionService } from '../transactions/transaction.service';
import { abi as BridgeAbi } from 'src/abi/contracts/Bridge.sol/Bridge.json';
import { TransferTypeEnum } from '../transactions/transfer-type.enum';
import { Cron, CronExpression } from '@nestjs/schedule';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { BscResponseType } from './types/bsc-response.type';
import { TransferStatusEnum } from '../transactions/enums/transfer-status.enum';
import InputDataDecoder from 'ethereum-input-data-decoder';
import { Transaction } from '../transactions/transaction.entity';

@Injectable()
export class BridgeListenersService {
  private readonly bsc_bridge: Bridge;
  private readonly polygon_bridge: Bridge;
  private readonly confirmationBlock: number;
  private readonly decoder = new InputDataDecoder(BridgeAbi);

  constructor(
    private readonly configService: ConfigService<Env>,
    private readonly walletProvider: WalletProvider,
    private readonly transactionService: TransactionService,
    private readonly httpService: HttpService,
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

    this.polygon_bridge = new ethers.Contract(
      this.configService.getOrThrow('POLYGON_BRIDGE_CONTRACT_ADDRESS'),
      BridgeAbi,
      walletProvider.polygon_wallet,
    ) as Bridge;
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async transferInterval() {
    try {
      const currentBlock = await this.bsc_bridge.provider.getBlockNumber();
      const transaction = await this.transactionService.getLatestTransaction();
      let blockNumber = 0;
      if (transaction) blockNumber = transaction.block_number;
      const transactions =
        await this.getRemainingTransactionsFromBlockNumber(blockNumber);

      for (const tx of transactions) {
        const data = this.decoder.decodeData(tx.input);
        if (data.method === null) continue;
        if (currentBlock - +tx.blockNumber < this.confirmationBlock) continue;

        if (tx.isError === '0') {
          const exists = await this.transactionService.findOne({
            where: {
              tx_hash: tx.hash,
              block_number: +tx.blockNumber,
            },
          });
          if (!exists) {
            const body: Partial<Transaction> = {
              network: NetworkEnum.BSC,
              tx_hash: tx.hash,
              block_number: +tx.blockNumber,
              status: TransferStatusEnum.Pending,
              recipient_address: tx.from,
            };
            if (data.method === 'transferFromBSC') {
              body.transfer_type = TransferTypeEnum.Transfer;
              body.token_address = '0x' + data.inputs[0].toString();
              body.amount = ethers.utils.formatEther(data.inputs[1]);
            } else if (data.method === 'transferNFTfromBSC') {
              body.transfer_type = TransferTypeEnum.NFT;
              body.land_id = data.inputs[0].toString();
            } else if (data.method === 'fullTransferFromBsc') {
              body.transfer_type = TransferTypeEnum.FullTransfer;
            }
            const new_tx =
              await this.transactionService.createTransaction(body);
            Logger.log(
              `Transaction Created WalletAddress:${new_tx?.id}`,
              'BridgeListenersService',
            );
          }
        }
      }
    } catch (e) {
      Logger.error(e);
    }
  }
  async getRemainingTransactionsFromBlockNumber(
    blockNumber: number,
  ): Promise<BscResponseType[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('api', {
          params: {
            module: 'account',
            action: 'txlist',
            address: this.configService.getOrThrow(
              'BSC_BRIDGE_CONTRACT_ADDRESS',
            ),
            startblock: blockNumber.toString(),
            apikey: this.configService.getOrThrow('BSC_API_KEY'),
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            Logger.error(error?.response?.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data.result;
  }
}
