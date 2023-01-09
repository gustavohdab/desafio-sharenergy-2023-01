import { Test } from '@nestjs/testing';
import axios from 'axios';
import { UsersService } from '../random-user.service';

describe('UsersService', () => {
  let usersService: UsersService;
  let axiosSpy: jest.SpyInstance;
  let usersResponse: any;

  beforeEach(async () => {
    usersResponse = {
      data: {
        results: [
          {
            picture: {
              large: 'test',
            },
            name: {
              first: 'test',
              last: 'test',
            },
            email: 'test',
            login: {
              username: 'test',
            },
            dob: {
              age: 123,
            },
          },
        ],
      },
    };

    axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue(usersResponse);

    const module = Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    usersService = (await module).get<UsersService>(UsersService);
  });

  describe('getUsers', () => {
    it('should return an array of modified users', async () => {
      const result = await usersService.getUsers();
      expect(result).toEqual([
        {
          picture: 'test',
          name: 'test test',
          email: 'test',
          username: 'test',
          age: 123,
        },
      ]);
      expect(axiosSpy).toHaveBeenCalledWith('https://randomuser.me/api/', {
        params: {
          results: 33,
        },
      });
    });
  });
});
