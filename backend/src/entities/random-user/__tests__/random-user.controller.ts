import { Test } from '@nestjs/testing';
import { UsersController } from '../random-user.controller';
import { UsersService } from '../random-user.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const users = [
        {
          picture: 'test',
          name: 'test',
          email: 'test',
          username: 'test',
          age: 123,
        },
      ];
      jest.spyOn(usersService, 'getUsers').mockResolvedValue(users);
      expect(await usersController.getUsers()).toEqual(users);
    });
  });
});
