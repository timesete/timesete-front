import { FunctionComponent } from "react";

import { HeaderWrapper } from "./styles";

export const Header: FunctionComponent = ({ children }) => {
  return (
    <HeaderWrapper>
      <img src="icons/logo.svg" alt="Mundo diverso" />
      <nav>

      </nav>
    </HeaderWrapper>
  )
};
