import { Module } from '@nestjs/common';
import { RandomDogController } from './random-dog.controller';
import { RandomDogService } from './random-dog.service';

@Module({
  controllers: [RandomDogController],
  providers: [RandomDogService],
})
export class RandomDogModule {}
