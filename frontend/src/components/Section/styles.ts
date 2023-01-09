import styled from "styled-components";

export const Container = styled.section`
  margin: 32px 0 0;
  text-align: center;

  > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 0 1rem 1rem;
    margin-bottom: 1.5rem;
    overflow: hidden;
    display: inline-block;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1rem;
    font-weight: 400;
  }
`;
