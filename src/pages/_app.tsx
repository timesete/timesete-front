import { AuthProvider } from "../context/AuthContext";
import { HomeProvider } from "../context/HomeContext";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <HomeProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </HomeProvider>
    </AuthProvider>
  )
};

export default MyApp;
