import "../styles/main.scss";
import "../styles/badges.scss";
import "../styles/darkscroller.scss";
import "../styles/demotions.scss";
import "../styles/player.scss";

import "focus-visible/dist/focus-visible";

import { AppProps } from "next/app";
import { FC, Fragment, useEffect, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

import ProgressBar from "../components/ProgressBar";
import ThemeCtx, { darkTheme } from "../components/Theme";

const FocusOutlineHidden = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [themeState, setTheme] = useState({ isDark: false });

  const setDark = () => {
    localStorage.setItem("color-theme", "dark");
    setTheme({ isDark: true });
  };

  const setLight = () => {
    localStorage.setItem("color-theme", "light");
    setTheme({ isDark: false });
  };

  const switchTheme = () => {
    if (localStorage.getItem("color-theme")?.toLowerCase() === "dark") setLight();
    else setDark();
  };

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    localStorage.getItem("color-theme") === "dark" ? setDark() : setLight();
  }, []);

  return (
    <Fragment>
      <ThemeCtx.Provider value={{ themeState, setDark, setLight, switchTheme }}>
        <ChakraProvider>
          <Global styles={FocusOutlineHidden} />
          <ProgressBar
            height={6}
            options={{ showSpinner: true }}
            color={themeState.isDark ? darkTheme.palette.primary.main : "#000000"}
          />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeCtx.Provider>
    </Fragment>
  );
};

export default MyApp;
