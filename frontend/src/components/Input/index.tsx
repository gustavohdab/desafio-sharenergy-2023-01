import { Container } from "./styles";

interface InputProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  style?: React.CSSProperties;
  required?: boolean;
}

export function Input({ icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
}
