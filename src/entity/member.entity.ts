import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ default: true })
  isActive: boolean;
}
