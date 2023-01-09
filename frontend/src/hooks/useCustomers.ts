import { useEffect, useState } from "react";
import { TableRow } from "../utils/interfaces";
import { myAPI } from "../services";

export function useCustomers(): [
  TableRow[],
  (row: TableRow) => void,
  string,
  (value: React.SetStateAction<string>) => void
] {
  const [customers, setCustomers] = useState<TableRow[]>([]);
  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCustomers() {
      const response = await myAPI().get("/customer");
      setCustomers(response.data);
    }
    fetchCustomers();
  }, []);

  function handleRowClick(row: TableRow): void {
    setSelectedRow(row);
  }

  return [customers, handleRowClick, search, setSearch];
}
