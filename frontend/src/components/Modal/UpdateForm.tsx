import React, { useState } from "react";
import { myAPI } from "../../services";
import { Input, Button } from "../index";
import { FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { UpdateCustomerDto } from "../../../../backend/src/dto/index";
import { TableRow } from "../../utils/interfaces";

interface UpdateFormProps {
  selectedRow: TableRow;
  onClose: () => void;
}

export function UpdateForm({ selectedRow, onClose }: UpdateFormProps) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<UpdateCustomerDto>({
    name: selectedRow.name,
    email: selectedRow.email,
    phone: selectedRow.phone,
    address: selectedRow.address,
  });
  const api = myAPI();

  async function updateCustomer(updatedRow: UpdateCustomerDto) {
    try {
      const response = await api.put(
        `/customer/${selectedRow._id}`,
        updatedRow
      );
      if (response.status === 200) {
        alert("Cliente atualizado com sucesso!");
        onClose();
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  }

  function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateCustomer(formData);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleUpdate}>
      <Input
        placeholder="Nome"
        id="name"
        value={formData.name}
        onChange={handleChange}
        icon={FiUser}
        type="text"
        name="name"
      />
      <Input
        placeholder="E-mail"
        id="email"
        value={formData.email}
        onChange={handleChange}
        icon={FiMail}
        type="email"
        name="email"
      />
      <Input
        placeholder="Telefone"
        id="phone"
        value={formData.phone}
        onChange={handleChange}
        icon={FiPhone}
        type="text"
        name="phone"
      />
      <Input
        placeholder="Endereço"
        id="address"
        value={formData.address}
        onChange={handleChange}
        icon={FiMapPin}
        type="text"
        name="address"
      />
      <Button type="submit" title="Salvar" />
      {error && <p>{error}</p>}
    </form>
  );
}
