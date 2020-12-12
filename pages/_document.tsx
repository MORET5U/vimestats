import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";
import React from "react";
import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="ru">
        <Head></Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
