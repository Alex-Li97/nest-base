import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const databaseConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number.parseInt(process.env.MYSQL_PORT, 10),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD || process.env.MYSQL_ROOT_PASSWORD || '',
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname + '/../**/entities/*.entity.{ts,js}'],
  migrations: ['dist/src/migrations/**/*.js'],
  // autoLoadEntities: true,
  /** https://typeorm.io/migrations */
  synchronize: true,
  logging: ['error'],
  timezone: '+08:00', // 东八区
};
