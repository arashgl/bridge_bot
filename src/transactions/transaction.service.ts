import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  MoreThan,
  Repository,
} from 'typeorm';
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
  async getLatestTransaction() {
    return this.transactionRepository.findOne({
      where: { id: MoreThan(0) },
      order: {
        id: 'DESC',
      },
    });
  }
  async findOne(obj: FindOneOptions<Transaction>) {
    return this.transactionRepository.findOne(obj);
  }
  async findAll(obj: FindManyOptions<Transaction>) {
    return this.transactionRepository.find(obj);
  }
  async update(obj: FindOptionsWhere<Transaction>, body: Partial<Transaction>) {
    return this.transactionRepository.update(obj, body);
  }
}
