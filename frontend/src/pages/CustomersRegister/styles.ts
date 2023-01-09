/* A styled component. */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  h1 {
    font-size: 24px;
    margin-top: 24px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > header {
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 124px;
    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
    @media (max-width: 768px) {
      padding: 0 24px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 50px auto;
`;
