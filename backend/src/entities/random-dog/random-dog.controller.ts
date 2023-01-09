import { Controller, Get } from '@nestjs/common';
import { RandomDogService } from './random-dog.service';

@Controller('random-dog')
export class RandomDogController {
  constructor(private readonly randomDogService: RandomDogService) {}

  @Get('image')
  async getRandomDogImage() {
    return this.randomDogService.getRandomDogImage();
  }
}
