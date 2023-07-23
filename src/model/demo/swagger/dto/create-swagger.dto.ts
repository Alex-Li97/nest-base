import { ApiProperty } from '@nestjs/swagger';

export class CreateSwaggerDto {
  @ApiProperty({ description: 'swagger name', required: true })
  name: string;
}
