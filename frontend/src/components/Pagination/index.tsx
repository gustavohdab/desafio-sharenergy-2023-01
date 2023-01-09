import { Container } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

export function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  return (
    <Container>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="prev"
        disabled={currentPage === 1}
        type="button"
      >
        <FaAngleLeft size={0} />
      </button>
      <span>
        {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="next"
        disabled={currentPage === totalPages}
        type="button"
      >
        <FaAngleRight />
      </button>
    </Container>
  );
}
