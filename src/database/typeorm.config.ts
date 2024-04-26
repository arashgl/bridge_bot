import { config as dotenvConfig } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Entities } from './entities';

dotenvConfig({ path: '.env' });
export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: process.env['MYSQL_HOST'],
  port: +process.env['MYSQL_PORT'],
  username: process.env['MYSQL_USER'],
  password: process.env['MYSQL_PASSWORD'],
  database: process.env['MYSQL_DATABASE'],
  synchronize: true,
  entities: Entities,
};

export const dataSource = new DataSource(databaseConfig as DataSourceOptions);
