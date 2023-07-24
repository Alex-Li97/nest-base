import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelModule } from '@/model/model.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

const envFilePath = ['.env'];
export const IS_DEV = process.env.RUNNING_ENV !== 'prod';
if (IS_DEV) {
  envFilePath.unshift('.env.dev');
} else {
  envFilePath.unshift('.env.prod');
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number.parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USERNAME,
      password:
        process.env.MYSQL_PASSWORD || process.env.MYSQL_ROOT_PASSWORD || '',
      database: process.env.MYSQL_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/src/migrations/**/*.js'],
      autoLoadEntities: true,
      /** https://typeorm.io/migrations */
      synchronize: true,
      logging: ['error'],
      timezone: '+08:00', // 东八区
    }),
    PrismaModule,
    ModelModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
