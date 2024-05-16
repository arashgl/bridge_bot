import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../database/base-entity';
import { NetworkEnum } from './enums/network.enum';
import { TransferTypeEnum } from './transfer-type.enum';
import { TransferStatusEnum } from './enums/transfer-status.enum';

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
  recipient_address: string;

  @Column()
  block_number?: number;

  @Column({ nullable: true })
  amount?: string;

  @Column({ nullable: true })
  token_address?: string;

  @Column({
    type: 'enum',
    enum: TransferStatusEnum,
    default: TransferStatusEnum.Pending,
  })
  status: TransferStatusEnum;

  @Column({ unique: true })
  tx_hash: string;
}
