import React from "react";
import InputMask from "react-input-mask";
import { Container } from "./styles";

interface MaskedInputProps {
  value: string;
  name: string;
  mask: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type?: string;
  required?: boolean;
}

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, "");

export const MaskedInput = ({
  value,
  onChange,
  name,
  mask,
  icon: Icon,
  placeholder,
}: MaskedInputProps) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value),
      },
    });
  }

  return (
    <Container>
      {Icon && <Icon />}
      <InputMask
        name={name}
        mask={mask}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Container>
  );
};
