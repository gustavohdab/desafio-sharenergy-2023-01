import { Controller, Get } from '@nestjs/common';
import { UsersService } from './random-user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }
}
