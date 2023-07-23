import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestOrmService } from './test-orm.service';
import { CreateTestOrmDto } from './dto/create-test-orm.dto';
import { UpdateTestOrmDto } from './dto/update-test-orm.dto';
import testOrm from './entities/test-orm.entity';
import { ApiTags, ApiExtraModels } from '@nestjs/swagger';
import { ApiResult } from '@/common/class/api-result';
import { PrismaModel } from '@/common/class/prisma';

@ApiTags('TestOrm')
@ApiExtraModels(testOrm)
@Controller('test-orm')
export class TestOrmController {
  constructor(private readonly testOrmService: TestOrmService) {}

  @ApiResult(testOrm, '创建成功')
  @Post()
  create(@Body() createTestOrmDto: any) {
    const res = this.testOrmService.create(createTestOrmDto);
    console.log('res', res, createTestOrmDto);
    return res;
  }

  @ApiResult(testOrm, '查询成功', true, true)
  @Get()
  findAll() {
    return this.testOrmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testOrmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestOrmDto: UpdateTestOrmDto) {
    return this.testOrmService.update(+id, updateTestOrmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testOrmService.remove(+id);
  }
}
