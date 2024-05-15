import { config as dotenvConfig } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Entities } from './entities';
import * as path from 'path';

dotenvConfig({ path: '.env' });

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: Entities,
  migrations: [path.join(__dirname, '../database/migrations/*{.js,.ts}')],
  // logging: true,
};

export const dataSource = new DataSource(databaseConfig as DataSourceOptions);
