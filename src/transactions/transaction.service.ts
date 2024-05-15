import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}
  async createTransaction(body: Partial<Transaction>) {
    try {
      const model = this.transactionRepository.create(body);
      return await this.transactionRepository.save(model);
    } catch (err) {
      Logger.error(err);
    }
  }
  async findOne(obj: FindOneOptions<Transaction>) {
    return this.transactionRepository.findOne(obj);
  }
}
