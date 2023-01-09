import React, { useEffect, useState } from "react";
import { TableRow } from "../../utils/interfaces";
import { myAPI } from "../../services/api";
import { Header, Input, Section, Table } from "../../components";
import { Container, Search, Content } from "./styles";
import { FiSearch } from "react-icons/fi";

export function RandomUsers() {
  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);
  const [randomUsers, setRandomUsers] = useState<TableRow[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    async function fetchRandomUsers() {
      const response = await myAPI().get("/users");
      setRandomUsers(response.data);
    }
    fetchRandomUsers();
  }, []);

  function handleRowClick(row: TableRow): void {
    setSelectedRow(row);
  }

  const filterData = (data: TableRow[], search: string) => {
    if (!search) return data;

    return data.filter((user) => {
      return (
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Section title="Usuários Aleatórios da API Random Users">
            <Search>
              <Input
                type="text"
                placeholder="Pesquisar usuário"
                value={search}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setSearch(e.target.value)}
                icon={FiSearch}
              />
            </Search>
            <Table
              data={randomUsers}
              search={search}
              filterData={filterData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              rowsPerPage={rowsPerPage}
              handleRowClick={handleRowClick}
              columns={["picture", "name", "email", "username", "age"]}
              tableType="users"
            />
          </Section>
        </Content>
      </main>
    </Container>
  );
}
