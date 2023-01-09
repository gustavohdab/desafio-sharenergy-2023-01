import styled from "styled-components";

const commonStyles = `
width: 100%;
display: grid;
grid-template-rows: 6.5625rem auto;
grid-template-areas: "header" "content";

main {
grid-area: content;
}

title {
font-size: 1.5rem;
}
`;

export const Container = styled.div`
  ${commonStyles}
`;

export const RefreshButton = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  transition: 0.2s;

  > svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Content = styled.div`
  ${commonStyles}
  max-width: 650px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > p {
    margin-top: 0.5rem;
    padding: 0 1rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
