import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import Store from "store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Nardinis Hotels</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
