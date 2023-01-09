/**
 * We're creating a new NestJS application, enabling CORS, and then listening on port 3000.
 */
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
