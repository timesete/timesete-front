import { FunctionComponent } from "react";

import { FooterHomeWrapper, FooterWrapper } from "./styles";

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

export const FooterHome = () => {

  return (
    <FooterHomeWrapper>
      <div>
        <img src="icons/logo_white.svg" alt="Mundo diverso" />
        <p>© 2021, Mundo Diverso | Todos os Direitos Reservados</p>
      </div>
      <div>
          <img src="icons/facebook_white.svg" alt="Facebook" />
          <img src="icons/instagram_white.svg" alt="Instagram" />
      </div>
      <div>
        <img src="icons/applestore_black.svg" alt="Apple store" />
      </div>
    </FooterHomeWrapper>
  )
}
