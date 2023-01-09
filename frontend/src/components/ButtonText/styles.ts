import styled from "styled-components";

interface ContainerProps {
  onClick?: () => void;
}

export const Container = styled.button<ContainerProps>`
  background: none;
  color: ${({ theme, onClick }) =>
    onClick ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  padding: 0.5rem 1rem;
  border: none;
  font-size: 1rem;
`;
