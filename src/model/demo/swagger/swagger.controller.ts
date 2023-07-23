import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SwaggerService } from './swagger.service';
import { CreateSwaggerDto } from './dto/create-swagger.dto';
import { UpdateSwaggerDto } from './dto/update-swagger.dto';
import { ApiTags, ApiExtraModels } from '@nestjs/swagger';
import { SwaggerDemo } from '@prisma/client';
import { ApiResult } from '@/common/class/api-result';
import { PrismaModel } from '@/common/class/prisma';
import { ResultData } from '@/common/class/api-result';

@ApiTags('SwaggerDemo')
@ApiExtraModels(PrismaModel.SwaggerDemo, ResultData)
@Controller('demo/swagger')
export class SwaggerController {
  constructor(private readonly swaggerService: SwaggerService) {}

  @ApiResult(PrismaModel.SwaggerDemo, '增加swagger演示')
  @Post()
  create(@Body() createSwaggerDto: CreateSwaggerDto) {
    console.log('createSwaggerDto');
    return this.swaggerService.create(createSwaggerDto);
  }

  @ApiResult(PrismaModel.SwaggerDemo, '查找所有swagger演示', true, true)
  @Get()
  findAll() {
    return this.swaggerService.findAll();
  }

  @ApiResult(PrismaModel.SwaggerDemo)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swaggerService.findOne(+id);
  }

  @ApiResult()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSwaggerDto: UpdateSwaggerDto) {
    return this.swaggerService.update(+id, updateSwaggerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swaggerService.remove(+id);
  }
}
