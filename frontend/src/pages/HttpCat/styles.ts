import styled from "styled-components";

interface Theme {
  COLORS: {
    ORANGE: string;
  };
}

const commonStyles = `
  text-align: center;
   color: ${({ theme }: { theme: Theme }) => theme.COLORS.ORANGE};
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 1.25rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6.5625rem auto;
  grid-template-areas: "header" "content";

  p {
    ${commonStyles}
  }

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const SmallButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;

  button {
    width: 5.625rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.625rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    button {
      width: 4.375rem;
      height: 2rem;
      font-size: 0.75rem;
    }
  }

  button + button {
    margin-left: 0.625rem;
  }

  button:hover {
    filter: brightness(0.9);
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > h2 {
    text-align: end;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    padding: 0 1.25rem;
  }
`;
