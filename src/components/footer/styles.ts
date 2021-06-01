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

export const FooterHomeWrapper = styled.footer`
display: flex;

background-color: #BD22F3;

padding: 2.9rem 5.7rem;

>div + div {
  display: flex;
  gap: 1rem;

  margin-left: 8.5rem;

  & :last-child {
    margin-left: 20rem;
  }
}

p {
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #FFFFFF;
}
`
