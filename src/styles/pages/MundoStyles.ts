import styled, { css } from "styled-components";

export const MundoWrapper = styled.div`
position: relative;
margin: 0 auto;
width: 77rem;

background-color: #fff;

main {
  display: flex;
  flex-direction: column;

  div :first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;



    width: 1232px;
    height: 64px;

    background-color: rgba(22, 14, 27, 0.4);

    font-family: Nunito;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;

    p {
      color: #fff;
    }
  }

  >img {
    flex: 1;
  }
}
`
interface PersonagemProps {
  left: number;
  top: number;
}

export const Personagem = styled.div<PersonagemProps>`
img {
  position: absolute;

  ${props => props && css`
    left: ${props.left}px;
    top: ${props.top}px;
  `}

  transition: transform .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2)
  }
}
`
