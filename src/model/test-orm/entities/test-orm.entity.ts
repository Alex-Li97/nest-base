import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// @Entity()
export default class testOrm {
  @ApiProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 50, unique: true })
  key: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', nullable: true })
  value: string;

  @ApiProperty({ type: String })
  @Column({ type: 'varchar', nullable: true })
  remark: string;
}
