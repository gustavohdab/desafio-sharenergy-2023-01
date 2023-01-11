import { Key } from "react";

/* Defining the interface for the table row. */
export interface TableRow {
  id?: Key;
  [x: string]: any;
  picture?: string;
  name: string;
  email: string;
  username?: string;
  age?: number;
  phone?: number;
  address?: string;
  cpf?: number;
}

/* Defining the interface for the table props. */
export interface TableProps<T extends TableRow> {
  data: T[];
  search: string;
  filterData: (data: T[], search: string) => T[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  handleRowClick: (row: T) => void;
  columns: string[];
  tableType: "users" | "customers";
}
