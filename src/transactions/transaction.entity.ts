import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../database/base-entity';
import { NetworkEnum } from './network.enum';

@Entity()
export class Transaction extends BaseEntity {
  @Column({ enum: NetworkEnum, type: 'enum' })
  network: NetworkEnum;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  amount: string;

  @Column()
  token_address: string;

  @Column()
  tx_hash: string;

  @Column({ default: true })
  is_event: boolean;
}
