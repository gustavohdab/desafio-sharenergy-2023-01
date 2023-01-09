import styled from "styled-components";

const commonStyles = `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Container = styled.div`
  ${commonStyles}

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 10px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 5px;
    width: 100%;
    flex: 0 0 90%;
    margin-top: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    object-fit: cover;
  }

  strong,
  h2 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    padding-bottom: 10px;
  }
`;

export const ModalContent = styled.div`
  ${commonStyles}
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 15px;
  padding: 20px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.ORANGE};
  cursor: pointer;
  top: 10px;
  right: 10px;
  font-size: 30px;
`;
