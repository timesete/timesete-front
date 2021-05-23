import { FunctionComponent, SelectHTMLAttributes } from "react";
import { SelectWrapper } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  title: string;
}

export const Select: FunctionComponent<SelectProps> = ({ children, title, name, ...rest }) => {
  return (
    <SelectWrapper>
      <label htmlFor={name}>{title}</label>
      <select id={name} name={name}>
        {children}
      </select>
    </SelectWrapper>
    )
  }
