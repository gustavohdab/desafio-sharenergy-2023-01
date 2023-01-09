import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6.5625rem auto;
  grid-template-areas: "header" "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }

  > h2 {
    text-align: end;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    padding: 1.25rem;
  }
`;

export const Search = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 5px 5%;
`;

export const Content = styled.div`
  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;
