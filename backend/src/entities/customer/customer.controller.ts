import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dto';
import { CustomerService } from './customer.service';
import { Customer } from './model/customer.model';
import { createCustomerValidation } from '../../validations/create-customer.validation';
import { updateCustomerValidation } from '../../validations/update-customer.validation';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    // validate request data
    createCustomerValidation(createCustomerDto);

    // create new customer
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Customer> {
    return this.customerService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    // validate request data
    await updateCustomerValidation(
      id,
      updateCustomerDto,
      this.customerService.customerModel,
    );

    // update customer
    return this.customerService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Customer> {
    return this.customerService.delete(id);
  }
}
