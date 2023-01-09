import { Test, TestingModule } from '@nestjs/testing';
import { RandomDogService } from '../random-dog.service';

describe('RandomDogService', () => {
  let service: RandomDogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomDogService],
    }).compile();

    service = module.get<RandomDogService>(RandomDogService);
  });

  it('should return a random dog image', async () => {
    const imageUrl = await service.getRandomDogImage();
    expect(imageUrl).toMatch(/https:\/\/random\.dog\/.*/);
  });
});
