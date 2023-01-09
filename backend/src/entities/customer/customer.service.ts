import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dto';
import { Customer } from './model/customer.model';

@Injectable()
export class CustomerService {
  constructor(@InjectModel('Customer') public customerModel: Model<Customer>) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new this.customerModel(createCustomerDto);
    return await customer.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findById(id: string): Promise<Customer> {
    return await this.customerModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.customerModel.findById(id).exec();
    Object.assign(customer, updateCustomerDto);
    return await customer.save();
  }

  async delete(id: string): Promise<Customer> {
    return await this.customerModel.findByIdAndDelete(id).exec();
  }
}
