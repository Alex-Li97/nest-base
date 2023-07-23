import { Bot } from './bot';
import { ApiProperty } from '@nestjs/swagger';

export class Reply {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  keyword: string;

  @ApiProperty({ type: String })
  content: string;

  @ApiProperty({ type: Number })
  type: number;

  @ApiProperty({ type: Number })
  factor: number;

  @ApiProperty({ type: Number })
  status: number;

  @ApiProperty({ type: Number })
  roomId: number;

  @ApiProperty({ type: Number })
  botId: number;

  @ApiProperty({ type: () => Bot })
  bot: Bot;

  @ApiProperty({ type: String })
  remark: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
