import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: '用户名', example: 'user1' })
  name: string;

  @ApiProperty({ description: '密码', example: '123456' })
  password: string;
}
