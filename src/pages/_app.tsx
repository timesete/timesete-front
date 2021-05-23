import { GlobalStyle } from "../styles/global";

GlobalStyle

function MyApp({ Component, pageProps }) {
  return (
    < >
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
};

export default MyApp;
