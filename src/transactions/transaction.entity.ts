import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../database/base-entity';
import { NetworkEnum } from './network.enum';
import { TransferTypeEnum } from './transfer-type.enum';

@Entity()
export class Transaction extends BaseEntity {
  @Column({ enum: NetworkEnum, type: 'enum' })
  network: NetworkEnum;

  @Column({
    type: 'enum',
    enum: TransferTypeEnum,
    default: TransferTypeEnum.Transfer,
  })
  transfer_type: TransferTypeEnum;

  @Column({ nullable: true })
  stake_duration?: number;

  @Column({ nullable: true })
  dnm_amount?: string;

  @Column({ nullable: true })
  uvm_amount?: string;

  @Column({ nullable: true })
  land_id?: number;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column({ nullable: true })
  amount?: string;

  @Column({ nullable: true })
  token_address?: string;

  @Column()
  tx_hash: string;

  @Column({ default: true })
  is_event: boolean;
}
