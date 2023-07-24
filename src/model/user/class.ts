import { OmitType } from "@nestjs/swagger"
import { PrismaModel } from '@/common/class/prisma';

export class unIncludedPassword extends OmitType(PrismaModel.User, ['name'] as const){}