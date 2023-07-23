import { Bot as _Bot } from './bot';
import { Reply as _Reply } from './reply';
import { ChattingRecord as _ChattingRecord } from './chatting_record';
import { SwaggerDemo as _SwaggerDemo } from './swagger_demo';
import { User as _User } from './user';
import { Test1 as _Test1 } from './test1';

export namespace PrismaModel {
  export class Bot extends _Bot {}
  export class Reply extends _Reply {}
  export class ChattingRecord extends _ChattingRecord {}
  export class SwaggerDemo extends _SwaggerDemo {}
  export class User extends _User {}
  export class Test1 extends _Test1 {}

  export const extraModels = [
    Bot,
    Reply,
    ChattingRecord,
    SwaggerDemo,
    User,
    Test1,
  ];
}
