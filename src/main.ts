import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { CustomLogger } from './base/utils/custom-logger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });
  await app.get(AppService).listenForConnections();
  Logger.verbose('App Started Successfully', 'Bootstrap');
}
bootstrap();
