import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { UpdateCustomerDto } from '../dto';
import { Customer } from '../entities/customer/model/customer.model';

export async function updateCustomerValidation(
  id: string,
  data: UpdateCustomerDto,
  customerModel: Model<Customer>,
) {
  // check if customer exists
  const customer = await customerModel.findById(id).exec();
  if (!customer) {
    throw new NotFoundException('Cliente não encontrado');
  }

  // check if any fields were changed
  let hasChanged = false;
  for (const field in data) {
    if (customer[field] !== data[field]) {
      hasChanged = true;
      break;
    }
  }
  if (!hasChanged) {
    throw new BadRequestException('Nenhum campo foi alterado');
  }
}
