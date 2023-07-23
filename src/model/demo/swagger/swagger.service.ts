import { Injectable, Inject } from '@nestjs/common';
import { CreateSwaggerDto } from './dto/create-swagger.dto';
import { UpdateSwaggerDto } from './dto/update-swagger.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { ResultData } from '@/common/class/api-result';

@Injectable()
export class SwaggerService {
  @Inject(PrismaService)
  private readonly prismaService: PrismaClient;

  async create(createSwaggerDto: CreateSwaggerDto) {
    const data = await this.prismaService.swaggerDemo.create({
      data: createSwaggerDto,
    });
    return ResultData.ok(data);
  }

  findAll() {
    return this.prismaService.swaggerDemo.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} swagger`;
  }

  update(id: number, updateSwaggerDto: UpdateSwaggerDto) {
    const res = this.prismaService.swaggerDemo.update({
      where: { id },
      data: updateSwaggerDto,
    });
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} swagger`;
  }
}
