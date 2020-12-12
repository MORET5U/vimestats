import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import customTheme from "components/customTheme";
import "focus-visible/dist/focus-visible";
import moment from "moment";
import "moment/locale/ru";
import { AppProps } from "next/app";
import { FC, Fragment, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import "../styles/badges.scss";
import "../styles/darkscroller.scss";
import "../styles/demotions.scss";
import "../styles/main.scss";
import "../styles/player.scss";

const FocusOutlineHidden = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    moment.locale("ru");
  }, []);

  return (
    <Fragment>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <Global styles={FocusOutlineHidden} />
        <ProgressBar height={6} options={{ showSpinner: true }} />
        <Component {...pageProps} />
      </ChakraProvider>
    </Fragment>
  );
};

export default MyApp;
