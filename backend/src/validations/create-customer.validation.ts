import { BadRequestException } from '@nestjs/common';
import { CreateCustomerDto } from '../dto';

export function createCustomerValidation(data: CreateCustomerDto) {
  // check if all required fields are present
  const requiredFields = ['name', 'email', 'phone', 'address', 'cpf'];
  for (const field of requiredFields) {
    if (!data[field]) {
      throw new BadRequestException(`${field} é obrigatório`);
    }
  }

  // check if name contains only letters
  if (!/^[a-zA-Z\s]+$/.test(data.name)) {
    throw new BadRequestException('Nome deve conter apenas letras e espaços');
  }
}
