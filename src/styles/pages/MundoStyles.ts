import styled from "styled-components";

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


export const Personagem = styled.div`
img {
  position: absolute;

  left: 200px;
  top: 450px;

  transition: transform .3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2)
  }
}
`
