import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  background-color: #E5E5E5;
  overflow-x: hidden;
  height: 100%;
}

body, input ,textarea ,button, a {
  font-family: Nunito, sans-serif;
  font-size: 1rem; //16px
  font-weight: normal;
  color: #554B58;
}

button {
  cursor: pointer;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%; //15px
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%; //14px
  }
}
`
