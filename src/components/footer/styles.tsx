import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100vw;
  height: 4rem;

  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;

  //bottom: 0;
  padding: 0 10rem;

  background-color: #2CCADF;

   p {
     color: #FFF;
   }

   div:first-child {
     img + img {
       margin-left: 1rem;
     }
   }
`
