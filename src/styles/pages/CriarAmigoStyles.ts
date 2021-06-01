import styled, { css } from "styled-components";

export const CriarAmigoWrapper = styled.div`
position: relative;

margin: 0 auto;

width: 77rem;
height: 100vh;

background-color: #fff;

main {
  display: grid;
  grid-template-columns: 2fr 504px;

  height: 592px;

  section :first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`
export const SelectionBox = styled.div`
height: 592px;

display: flex;
flex-direction: column;

position: relative;

box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);


footer {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;


  button {
    width: 327px;
    height: 44px;
  }
}

header {
  height: 176px;
  background: #2CCADF;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  padding: 0 100px;

  h2 {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;

    color: #FFFFFF;

  }
}
`
export const SelectorOption = styled.div`
height: 96px;
display: grid;
grid-template-columns: repeat(4, 1fr);

padding: 1rem;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);


>button {
  background-color: transparent;
  border: none;

  transition: filter .2s;

  & :hover {
    filter: brightness(.9);
  }
}
`
export const Options = styled.div`
width: 504px;
height: 204px;

background-color: #E5E5E5;

display: flex;
gap: 1rem;

padding: 1rem;

flex-wrap: wrap;
`
export const Colors = styled.div`
width: 504px;
height: 56px;

display: flex;
gap: 1rem;

padding: 1rem;

background-color: #E5E5E5;
`

interface ColorButtonProps {
  colorHex: string;
}

export const ColorButton = styled.button<ColorButtonProps>`
height:40px;
width: 40px;
border-radius: 20px;
border: none;

${props => props.colorHex && css`
background-color: ${props.colorHex};
`}
`

export const TomDePele = styled.div`
position: absolute;

top: 210px;
left: 230px;

img {
  transform: scale(.7)
}

`

export const Cabelo = styled.div`
position: absolute;

top: 155px;
left: 213px;

z-index: 5;

img {
  transform: scale(.7)
}
`

export const Corpo = styled.div`
position: absolute;
left: 238px;
top: 342px;

z-index: 1;

img {
  transform: scale(.7)
}
`

export const Pernas = styled.div`
position: absolute;

top: 216px;
left: 168px;

img {
  transform: scale(.7)
}
`

export const Parts = styled.button`
width: 81px;
height: 81px;

background-color: transparent;
border: none;

img {

  width: 81px;
  height: 81px;
}
`
