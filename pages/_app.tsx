import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Head } from "next/document";
import theme from "../theme";
import GlobalStyles from "../GlobalStyles";
import {Provider} from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import MobileMenu from '../components/MobileMenu/container'
import Burger from '../components/Burger/container'
import Overlay from '../components/Overlay/container'

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Burger />
              <MobileMenu />
              <Overlay />
              <Component {...pageProps} key={router.route} />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </>
    );
  }
}
