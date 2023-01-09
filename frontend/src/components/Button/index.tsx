import { Container } from "./styles";

interface ButtonProps {
  title: string;
  loading?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({ title, loading = false, ...rest }: ButtonProps) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}
