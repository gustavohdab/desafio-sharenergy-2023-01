import { Module } from '@nestjs/common';
import { UsersController } from './random-user.controller';
import { UsersService } from './random-user.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
