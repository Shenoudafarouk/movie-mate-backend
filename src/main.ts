import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json } from 'express';
import { urlencoded } from 'express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('MovieMate');

  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors
          .map((error) => Object.values(error.constraints))
          .join(', ');
        return new BadRequestException({
          statusCode: 400,
          error: 'Bad Request',
          message: messages,
        });
      },
    }),
  );

  app.enableShutdownHooks();
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    logger.log('Application started');
    logger.log(`listening at port ${port}`);
  });
}
bootstrap().catch((err) => console.error('Error starting server:', err));
