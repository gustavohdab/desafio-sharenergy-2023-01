import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../index";
import { RiMenuLine, RiShutDownLine, RiCloseLine } from "react-icons/ri";
import {
  Container,
  Profile,
  LogoutIcon,
  MenuIcon,
  MenuMobile,
  MenuTitle,
  LogoutButton,
  CloseIcon,
  Menu,
} from "./styles";

export function Header() {
  const { signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageSelected, setIsPageSelected] = useState("");
  const [activePath, setActivePath] = useState("");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigation = useNavigate();

  function handleSignOut() {
    alert("Logout efetuado com sucesso!");
    navigation("/");
    signOut();
  }

  function handlePageSelected(path: string) {
    setIsPageSelected(path);
  }

  return (
    <Container>
      <MenuIcon onClick={toggleMenu}>
        <RiMenuLine />
      </MenuIcon>
      {isMenuOpen && (
        <MenuMobile>
          <CloseIcon isMenuOpen={isMenuOpen} onClick={toggleMenu}>
            <RiCloseLine />
          </CloseIcon>
          <MenuTitle>Sharenergy Test</MenuTitle>
          <ButtonText
            path="/"
            title="Random Users"
            onClick={() => handlePageSelected("/")}
          />
          <ButtonText
            path="/http-cat"
            title="HTTP Cat"
            onClick={() => handlePageSelected("/http-cat")}
          />
          <ButtonText
            path="/random-dog"
            title="Random Dog"
            onClick={() => handlePageSelected("/random-dog")}
          />
          <ButtonText
            path="/customers"
            title="Clientes"
            onClick={() => handlePageSelected("/customers")}
          />
          <LogoutButton onClick={handleSignOut}>Logout</LogoutButton>
        </MenuMobile>
      )}
      <Profile>
        <div>
          <span>Bem vindo,</span>
          <strong>desafiosharenergy</strong>
        </div>
      </Profile>
      <Menu>
        <ButtonText
          path="/"
          title="Random Users"
          onClick={() => handlePageSelected("/")}
        />
        <ButtonText
          path="/http-cat"
          title="HTTP Cat"
          onClick={() => handlePageSelected("/http-cat")}
        />
        <ButtonText
          path="/random-dog"
          title="Random Dog"
          onClick={() => handlePageSelected("/random-dog")}
        />
        <ButtonText
          path="/customers"
          title="Clientes"
          onClick={() => handlePageSelected("/customers")}
        />
      </Menu>
      <LogoutIcon onClick={handleSignOut}>
        <RiShutDownLine />
      </LogoutIcon>
    </Container>
  );
}
