import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

/**
 * @description: swagger配置初始化
 * @param app {INestApplication}
 */
export function setupSwagger(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

/**
 * @description: swagger配置
 */
const config = new DocumentBuilder()
  .setTitle('Cool-Land')
  .setDescription('The cool-land API description')
  .setVersion('1.0')
  .addTag('TestOrm', '聊天记录')
  .addTag('SwaggerDemo', 'swagger演示')
  .addTag('User', '用户')
  .build();
