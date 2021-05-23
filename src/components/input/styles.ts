import styled, { css } from "styled-components";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const InputWrapper = styled.div`
width: 25rem;

label {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-family: Nunito, sans-serif;
}
`;

export const InputStyled = styled.div<InputProps>`
width: 100%;
height: 2.2rem;

display: flex;
align-items: center;

Padding: .5rem .75rem ;
margin-top: .5rem;

border-radius: 4px;
border: 1px solid #C5C1C8;

background-color: #FFF;

${props => props.isFocused && css`
  border: 2px solid #BD22F3;
`}

input {
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;

  font-size: 1rem;
  font-family: Nunito, sans-serif;
  font-weight: 400;
  line-height: 1.5rem;

  &::placeholder {
    color: #C5C1C8;
    font-weight: 400;
  }
}

svg {
  margin-left: 1rem;

  ${props => props.isFilled && css`
    fill: #BD22F3;
  `}
}
`
