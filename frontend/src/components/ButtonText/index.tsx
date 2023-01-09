import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

interface ButtonTextProps {
  path?: string;
  title: string;
  onClick?: () => void;
}

export function ButtonText({ title, path }: ButtonTextProps) {
  const navigation = useNavigate();

  return (
    <Container
      onClick={() => {
        navigation(path);
      }}
    >
      {title}
    </Container>
  );
}
