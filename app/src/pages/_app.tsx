import RootLayout from "@/components/layouts/RootLayout";
import store, { persistor } from "@/constants/redux/Store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "../chakra/theme";
import "../styles/Nprogress.css";

export default function App({ Component, pageProps }: AppProps) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <RecoilRoot>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ChakraProvider theme={theme}>
              <RootLayout>
                <Component {...pageProps} />
              </RootLayout>
            </ChakraProvider>
          </PersistGate>
        </Provider>
      </RecoilRoot>
    </>
  );
}
