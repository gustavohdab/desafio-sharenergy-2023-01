import { Document, Schema, model } from 'mongoose';

export interface Customer extends Document {
  name: string;
  email: string;
  phone: number;
  address: string;
  cpf: number;
}

export const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  cpf: { type: Number, required: true, unique: true },
});

export const CustomerModel = model<Customer>('Customer', customerSchema);
