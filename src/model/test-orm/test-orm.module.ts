import { Module } from '@nestjs/common';
import { TestOrmService } from './test-orm.service';
import { TestOrmController } from './test-orm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import testOrm from './entities/test-orm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([testOrm])],
  controllers: [TestOrmController],
  providers: [TestOrmService],
})
export class TestOrmModule {}
