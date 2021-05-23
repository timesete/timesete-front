import { FunctionComponent } from "react";

import { FooterWrapper } from "./styles";

export const Footer: FunctionComponent = ({ children }) => {
  return (
    <FooterWrapper>
      <div>
        <img src="icons/instagram.svg" alt="Instagram" />
        <img src="icons/facebook.svg" alt="Facebook" />
      </div>
      <p>© 2021, Mundo Diverso | Todos os Direitos Reservados</p>
      <div>
        <img src="icons/applestore.svg" alt="Apple store" />
      </div>
    </FooterWrapper>
  )
};
