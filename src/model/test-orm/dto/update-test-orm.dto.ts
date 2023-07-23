import { PartialType } from '@nestjs/mapped-types';
import { CreateTestOrmDto } from './create-test-orm.dto';

export class UpdateTestOrmDto extends PartialType(CreateTestOrmDto) {}
