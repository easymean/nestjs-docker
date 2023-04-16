import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('member')
export class Member {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 45,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  isActive: boolean;
}
