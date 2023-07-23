import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateTestOrmDto } from './dto/create-test-orm.dto';
import { UpdateTestOrmDto } from './dto/update-test-orm.dto';
import testOrm from './entities/test-orm.entity';
import { ResultData } from '@/common/class/api-result';

@Injectable()
export class TestOrmService {
  @InjectEntityManager()
  private manager: EntityManager;
  constructor(
    @InjectRepository(testOrm)
    private ormModel: Repository<testOrm>,
  ) {}
  create(createTestOrmDto: CreateTestOrmDto) {
    console.log('createTestOrmDto', createTestOrmDto);
    return this.manager.save(testOrm, createTestOrmDto);
  }

  async findAll() {
    const data = await this.ormModel.find();
    return ResultData.ok(data);
  }

  findOne(id: number) {
    return `This action returns a #${id} testOrm`;
  }

  update(id: number, updateTestOrmDto: UpdateTestOrmDto) {
    return `This action updates a #${id} testOrm`;
  }

  remove(id: number) {
    return `This action removes a #${id} testOrm`;
  }
}
