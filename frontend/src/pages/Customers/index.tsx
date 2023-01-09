import { useState } from "react";
import { useCustomers } from "../../hooks/useCustomers";
import { TableRow } from "../../utils/interfaces";
import { Input, Section, Table, Header } from "../../components";
import { FiSearch, FiPlus } from "react-icons/fi";
import { Container, Brand, Search, Content, Register, Sidebar } from "./styles";

export function Customers() {
  const [customers, handleRowClick, search, setSearch] = useCustomers();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const filterData = (data: TableRow[], search: string) => {
    if (!search) return data;
    return data.filter((user) => {
      const searchValue = search.toLowerCase();
      const userName = user.name.toLowerCase();
      const userEmail = user.email.toLowerCase();
      const userPhone = user.phone.toFixed();
      const userAddress = user.address.toLowerCase();
      const userCpf = user.cpf.toFixed();

      return (
        userName.includes(searchValue) ||
        userEmail.includes(searchValue) ||
        userAddress.includes(searchValue) ||
        userPhone.includes(searchValue) ||
        userCpf.includes(searchValue)
      );
    });
  };
  return (
    <Container>
      <Brand>
        <h1>Sharenergy</h1>
      </Brand>
      <Header />
      <Section title="Clientes"></Section>
      <Sidebar>
        <p>
          Obrigado pela oportunidade de participar do processo seletivo da
          Sharenergy. <br />
          Foi um desafio muito interessante e divertido de fazer. 🧡
        </p>
      </Sidebar>
      <Content>
        <Search>
          <Input
            type="text"
            placeholder="Pesquisar cliente"
            value={search}
            onChange={({ target: { value } }) => setSearch(value)}
            icon={FiSearch}
          />
        </Search>

        <Table
          data={customers}
          search={search}
          filterData={filterData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
          handleRowClick={handleRowClick}
          columns={["name", "email", "phone", "address", "cpf"]}
          tableType="customers"
        />
      </Content>

      <Register to="/customers/register">
        <FiPlus />
        Cadastrar Cliente
      </Register>
    </Container>
  );
}
