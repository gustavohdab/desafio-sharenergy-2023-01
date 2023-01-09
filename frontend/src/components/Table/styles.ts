/* A styled component. */
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 90%;
  overflow-x: auto;
  margin: 0 1rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 0.25rem;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  table {
    border-collapse: collapse;
    width: 100%;

    td {
      padding: 0.75rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }

    th,
    td {
      text-align: left;
      padding: 0.75rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }

    th {
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.ORANGE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      filter: brightness(0.9);
      text-transform: capitalize;
    }

    tr:nth-of-type(even) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      filter: brightness(0.9);
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
      object-fit: cover;
    }

    /* Mobile styles */
    @media (max-width: 600px) {
      th {
        display: none;
      }
      tr {
        display: flex;
        flex-direction: column;
        margin: 0 0 1rem;
        padding: 1rem;
      }
      td {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 0 0.5rem;
      }

      td:before {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        content: attr(data-label);
        float: left;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      td:last-of-type {
        border-bottom: none;
      }

      img {
        float: right;
      }
    }
  }
`;

export const SortIcon = styled.i`
  font-size: 1.2em;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-left: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #666;
  }
`;

export const SortIconSpan = styled.span`
  vertical-align: middle;
`;
