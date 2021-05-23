import { ButtonHTMLAttributes, FunctionComponent } from "react";

import { ButtonWrapper } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = ({ children, ...rest}) => {
  return (
    <ButtonWrapper type="button" {...rest}>
      {children}
    </ButtonWrapper>
  )
};
