import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiTags, ApiExtraModels, OmitType } from '@nestjs/swagger';
import { PrismaModel } from '@/common/class/prisma';
import { ApiResult } from '@/common/class/api-result';

@ApiTags('User')
@ApiExtraModels(
  PrismaModel.User,
  OmitType(PrismaModel.User, ['password'] as const),
  OmitType(PrismaModel.User, ['name'] as const),
)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResult(PrismaModel.User, '创建用户')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('login')
  login(@Body() loginInfo: LoginDto) {
    return this.userService.login(loginInfo);
  }

  @ApiResult(OmitType(PrismaModel.User, ['password'] as const), '注册用户')
  @Post('register')
  register(@Body() registerInfo: RegisterDto) {
    return this.userService.register(registerInfo);
  }
}
