import { Link } from "react-router-dom";
import { useState } from "react";
import { clearFields, myAPI } from "../../services";
import { Button, Input } from "../../components";
import { Container, Form } from "./styles";
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiUserCheck,
} from "react-icons/fi";

export function CustomersRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cpf, setCpf] = useState("");

  async function createCustomer() {
    if (!name || !email || !phone || !address || !cpf) {
      alert("Preencha todos os campos!");
      return;
    }
    try {
      const response = await myAPI().post("/customer", {
        name,
        email,
        phone,
        address,
        cpf,
      });
      if (response.status === 201) {
        alert("Cliente cadastrado com sucesso!");
        clearFields(setName, setEmail, setPhone, setAddress, setCpf);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  }

  return (
    <Container>
      <header>
        <Link to="/customers">
          <FiArrowLeft />
        </Link>
      </header>

      <h1>Cadastrar novo cliente</h1>

      <Form>
        <Input
          placeholder="Nome"
          id="name"
          icon={FiUser}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          placeholder="E-mail"
          id="email"
          icon={FiMail}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Telefone"
          id="phone"
          icon={FiPhone}
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          placeholder="Endereço"
          id="address"
          icon={FiMapPin}
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Input
          placeholder="CPF"
          id="cpf"
          icon={FiUserCheck}
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <Button title="Cadastrar" onClick={createCustomer} type="submit" />
      </Form>
    </Container>
  );
}
