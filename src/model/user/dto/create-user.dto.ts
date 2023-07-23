import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'user1' })
  name: string;

  @ApiProperty({ description: '密码', example: '123456' })
  password: string;

  @ApiProperty({ description: '年龄', example: 18 })
  age: number;
}
