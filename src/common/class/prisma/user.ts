import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: Number, description: '用户id' })
  id: number;

  @ApiProperty({ type: String, description: '用户名' })
  name: string;

  @ApiProperty({ type: Number, description: '用户年龄'    })
  age: number;

  @ApiProperty({ type: String, description: '用户密码' })
  password: string;

  @ApiPropertyOptional({ type: String, description: '用户token' })
  token?: string;

  @ApiProperty({ type: Date, description: '创建时间' })
  createdAt: Date;

  @ApiProperty({ type: Date, description: '更新时间' })
  updatedAt: Date;
}
