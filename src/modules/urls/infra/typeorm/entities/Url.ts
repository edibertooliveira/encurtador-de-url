import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUrl } from '@modules/urls/domain/model/IUrl';

@Entity('URL')
export default class Url implements IUrl {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;

  @Column()
  reference: string;

  @CreateDateColumn()
  created_at: Date;
}
