/* eslint-disable class-methods-use-this */
import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import theme from "../theme";
import GlobalStyles from "../GlobalStyles";

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} key={router.route} />
        </ThemeProvider>
      </div>
    );
  }
}
