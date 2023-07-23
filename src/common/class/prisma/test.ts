import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Test {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  age: number;

  @ApiProperty({ type: String })
  password: string;

  @ApiPropertyOptional({ type: String })
  token?: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
