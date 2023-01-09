import styled from "styled-components";

const commonStyles = `
  border-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  max-height: 650px;
  border: dashed 2px ${({ theme }) => theme.COLORS.ORANGE};
  overflow: hidden;
  padding: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  ${commonStyles}

  @media (max-width: 768px) {
    max-width: 70%;
    height: 40vh;
    object-fit: cover;
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  ${commonStyles}
`;

export const Video = styled.video`
  ${commonStyles}
`;
