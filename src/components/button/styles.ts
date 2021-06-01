import styled from "styled-components";

export const ButtonWrapper = styled.button`
width: 25rem;
height: 2.75rem;

font-family: Nunito, sans-serif;
font-size: 1.125rem;
line-height: 1.75rem;
font-weight: 900;
color: #fff;

background-color: #BD22F3;

box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);

border: none;
border-radius: 8px;

transition: filter .2s;

:hover {
  filter: brightness(.9)
}
`;
