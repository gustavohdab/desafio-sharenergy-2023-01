import { Test } from '@nestjs/testing';
import { RandomDogController } from '../random-dog.controller';
import { RandomDogService } from '../random-dog.service';

describe('RandomDogController', () => {
  let randomDogController: RandomDogController;
  let randomDogService: RandomDogService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [RandomDogController],
      providers: [RandomDogService],
    }).compile();

    randomDogController = module.get<RandomDogController>(RandomDogController);
    randomDogService = module.get<RandomDogService>(RandomDogService);
  });

  describe('getRandomDogImage', () => {
    it('should return a random dog image', async () => {
      const image = 'https://random.dog/abc123';
      jest
        .spyOn(randomDogService, 'getRandomDogImage')
        .mockResolvedValue(image);
      expect(await randomDogController.getRandomDogImage()).toEqual(image);
    });
  });
});
