import styled from "styled-components";
import { Link } from "react-router-dom";

const commonStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "sidebar search"
    "sidebar content"
    "register content";

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
export const Brand = styled.div`
  grid-area: brand;
  ${commonStyles}
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.ORANGE};
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Sidebar = styled.ul`
  grid-area: sidebar;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 64px 20px;
    text-align: left;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Search = styled.div`
  grid-area: search;
  ${commonStyles}
  padding: 5px 4.9%;
  min-width: 50px;
`;

export const Content = styled.div`
  grid-area: content;
  /* padding: 64px 64px 0; */
  @media (max-width: 1000px) {
    padding: 40px 50px 0;
    overflow-y: scroll;
    margin-bottom: 40px;
  }
`;

export const Register = styled(Link)`
  grid-area: register;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  ${commonStyles}
  svg {
    margin-right: 8px;
  }
  @media (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    height: 40px;
    width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
  ${commonStyles}
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  @media (max-width: 1000px) {
    display: none;
  }
`;
