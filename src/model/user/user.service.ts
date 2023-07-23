import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from '@/prisma/prisma.service';

import { PrismaClient } from '@prisma/client';
import { ResultData } from '@/common/class/api-result';
import { decryptData, encryptData } from '@/common/utils/cryptogram';
import * as console from 'console';

@Injectable()
export class UserService {
  @Inject(PrismaService)
  private readonly prismaService: PrismaClient;

  async create(createUserDto: CreateUserDto) {
    const data = await this.prismaService.user.create({ data: createUserDto });
    return ResultData.ok(data);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(loginInfo: LoginDto) {
    const user = await this.prismaService.user.findFirstOrThrow({
      where: {
        name: loginInfo.name,
      },
    });
    const hashPwd = encryptData(loginInfo.password, 'PASSWORD_KEY');
    console.log(user, hashPwd);
    if (!user) return ResultData.fail(402, '用户不存在');
    if (user && user.password === hashPwd) {
      return ResultData.ok(user);
    } else {
      return ResultData.fail(402, '密码错误');
    }
  }

  async register(registerInfo: RegisterDto) {
    const user = await this.prismaService.user.findFirst({
      where: {
        name: registerInfo.name,
      },
    });

    if (user) {
      return ResultData.fail(402, '用户名已存在');
    } else {
      const hashPwd = decryptData(registerInfo.password);
      console.log(hashPwd, 'hashPwd');
      registerInfo.password = hashPwd;
      const data = await this.prismaService.user.create({
        data: registerInfo,
      });
      delete data.password;
      return ResultData.ok(data);
    }
  }
}
