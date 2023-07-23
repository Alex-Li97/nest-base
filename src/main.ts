import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from '@/common/log4js/logger.middleware';
import { setupSwagger } from '@/common/utils/swagger-step';
import { Logger } from '@/common/log4js/log4j.util';
import { TransformInterceptor } from '@/common/log4js/transform.interceptor';
import { HttpExceptionsFilter } from '@/common/log4js/http-exceptions-filter';
import { ExceptionsFilter } from '@/common/log4js/exceptions-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局验证;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      enableDebugMessages: true, // 开发环境
      disableErrorMessages: false,
      forbidUnknownValues: false,
    }),
  );
  setupSwagger(app);
  // 日志
  app.use(logger);
  // 使用全局拦截器打印出参
  app.useGlobalInterceptors(new TransformInterceptor());
  // 所有异常
  app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
