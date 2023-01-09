import { useState, useEffect } from "react";
import { TableRow, TableProps } from "../../utils/interfaces";
import { Modal, Pagination } from "../index";
import { TableWrapper, SortIcon, SortIconSpan } from "./styles";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const Table = <T extends TableRow>({
  data,
  search,
  filterData,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  handleRowClick,
  columns,
  tableType,
}: TableProps<T>) => {
  const [selectedRow, setSelectedRow] = useState<T | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filterData(data, search).slice(
    indexOfFirstRow,
    indexOfLastRow
  );
  const totalPages = Math.ceil(filterData(data, search).length / rowsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const [ascending, setAscending] = useState(true);

  // Sorts the rows in `data` by the value of the specified column
  const sortRows = (column: string) => {
    if (column === sortBy) {
      // Invert the sort order if the column is already sorted
      setAscending(!ascending);
    } else {
      // Set the sort order to ascending if the column is not already sorted
      setAscending(true);
    }

    // Set the `sortBy` state variable to the name of the sorted column
    setSortBy(column);

    // Sort the rows in ascending order by default
    const sortedRows = data.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });

    // Invert the sort order if `ascending` is false
    if (!ascending) {
      sortedRows.reverse();
    }
  };

  return (
    <>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  onClick={() => {
                    sortRows(column);
                  }}
                >
                  {column}
                  {sortBy === column && (
                    <SortIconSpan>
                      {ascending ? (
                        <SortIcon as={FaArrowUp} />
                      ) : (
                        <SortIcon as={FaArrowDown} />
                      )}
                    </SortIconSpan>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr
                key={row._id || row.username}
                onClick={() => {
                  setSelectedRow(row);
                  handleRowClick(row);
                }}
              >
                {columns.map((column) =>
                  column === "picture" ? (
                    <td key={column}>
                      <img src={row[column]} alt={row.name} />
                    </td>
                  ) : (
                    <td key={column}>{row[column]}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>
      {selectedRow && (
        <Modal
          title="Detalhes do usuário"
          onClose={() => setSelectedRow(null)}
          selectedRow={selectedRow}
          showUpdateAndDeleteButtons={tableType === "customers"}
        >
          <div>
            <img src={selectedRow.picture} alt={selectedRow.name} />
            <div>
              <h3>{selectedRow.name}</h3>
              <p>{selectedRow.email}</p>
              <p>{selectedRow.username}</p>
              <p>{selectedRow.age}</p>
              <p>{selectedRow.phone}</p>
              <p>{selectedRow.address}</p>
              <p>{selectedRow.cpf}</p>
            </div>
          </div>
        </Modal>
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};
