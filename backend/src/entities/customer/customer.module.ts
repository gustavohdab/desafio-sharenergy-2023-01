import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { customerSchema } from './model/customer.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: customerSchema }]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
