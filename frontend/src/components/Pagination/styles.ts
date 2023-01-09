import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;

  button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    &:disabled {
      filter: opacity(0.5);
    }

    &:disabled:hover {
      color: red;
      cursor: not-allowed;
    }

    &:not(:disabled) {
      &:hover {
        color: ${({ theme }) => theme.COLORS.ORANGE};
      }
    }
  }
`;
