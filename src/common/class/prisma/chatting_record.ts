import { ApiProperty } from '@nestjs/swagger';

export class ChattingRecord {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  roomId: number;

  @ApiProperty({ type: Number })
  botId: number;

  @ApiProperty({ type: String })
  content: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
