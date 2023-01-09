import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const MenuIcon = styled.button`
  border: none;
  background: none;
  margin-right: 20px;
  margin-left: auto;
  svg {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.5rem;
  }
  @media (min-width: 767px) {
    display: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  align-items: flex-start;
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    strong {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
      filter: brightness(0.9);
    }
  }
  @media (max-width: 878px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-left: auto;
  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const LogoutIcon = styled.button`
  border: none;
  background: none;
  > Button {
    font-size: 0.875rem;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.5rem;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 1.6rem;
  text-align: center;
  margin: 0 0 1rem;
  padding: 1rem;
`;

export const LogoutButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 1rem;
  font-weight: bold;
`;

export const CloseIcon = styled.button<{ isMenuOpen: boolean }>`
  position: absolute;
  top: 2rem;
  right: 2rem;
  margin-left: auto;
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 2rem;
  cursor: pointer;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
`;

export const MenuMobile = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  padding: 143px 0;
  z-index: 1;
  @media (min-width: 767px) {
    display: none;
  }
`;
