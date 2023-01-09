import { Module } from '@nestjs/common';
import { HttpCatController } from './http-cat.controller';
import { HttpCatService } from './http-cat.service';

@Module({
  controllers: [HttpCatController],
  providers: [HttpCatService],
})
export class HttpCatModule {}
