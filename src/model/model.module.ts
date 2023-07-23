import { Module } from '@nestjs/common';
import { SwaggerModule } from '@/model/demo/swagger/swagger.module';
import { TestOrmModule } from '@/model/test-orm/test-orm.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SwaggerModule, TestOrmModule, UserModule],
})
export class ModelModule {}
