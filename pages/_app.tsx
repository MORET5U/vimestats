import "../styles/main.scss";
import "../styles/badges.scss";
import "../styles/darkscroller.scss";
import "../styles/demotions.scss";
import "../styles/player.scss";
import "focus-visible/dist/focus-visible";
import { AppProps } from "next/app";
import { FC, Fragment } from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import ProgressBar from "../components/ProgressBar";
import customTheme from "components/customTheme";

const FocusOutlineHidden = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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
