import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

const commonStyles = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  > h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  > p {
    margin: 10px 0;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > h2 {
    font-size: 1.5rem;
    margin: 24px 0;
  }
  @media (min-width: 768px) {
    margin: 20px;
  }
  @media (min-width: 2000px) {
    margin: 20px 100px;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin: 10px 0;
  font-size: 1.2rem;
  ${commonStyles}
`;

export const BackgroundImg = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    background-image: url(${backgroundImg});
  }
`;
