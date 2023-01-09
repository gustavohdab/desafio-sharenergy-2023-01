import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Input, Button } from "../../components";
import { Container, Form, Label, BackgroundImg } from "./styles";
import { FiUser, FiLock } from "react-icons/fi";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn({ username, password, rememberMe });
  }

  return (
    <Container>
      <Form>
        <h1>Sharenergy Test</h1>
        <p>Aplicação para interagir com outras API’s.</p>

        <h2>Faça seu login</h2>

        <Input
          name="username"
          type="username"
          placeholder="Usuário"
          icon={FiUser}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Label htmlFor="remember-me">
          Lembrar-me
          <input
            id="remember-me"
            type="checkbox"
            style={{ display: "none" }}
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          {rememberMe ? (
            <ImCheckboxChecked size={20} />
          ) : (
            <ImCheckboxUnchecked size={20} />
          )}
        </Label>

        <Button title="Entrar" onClick={handleSignIn} />
      </Form>
      <BackgroundImg />
    </Container>
  );
}
