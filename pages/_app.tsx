import { Fragment, FC, useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeCtx, { betterLight, darkTheme } from "../components/Theme";
import ProgressBar from "../components/ProgressBar";
import { AppProps } from "next/app";

import "../styles/main.scss";
import "../styles/badges.scss";
import "../styles/darkscroller.scss";
import "../styles/demotions.scss";
import "../styles/player.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [currentTheme, setTheme] = useState({ isDark: false });

  const setDark = () => {
    localStorage.setItem("color-theme", "dark");
    setTheme({ isDark: true });
  };

  const setLight = () => {
    localStorage.setItem("color-theme", "light");
    setTheme({ isDark: false });
  };

  const switchTheme = () => {
    if (localStorage.getItem("color-theme")?.toLowerCase() === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <ThemeCtx.Provider
        value={{
          themeState: currentTheme,
          setDark: setDark,
          setLight: setLight,
          switchTheme: switchTheme,
        }}
      >
        <ThemeProvider theme={currentTheme.isDark ? darkTheme : betterLight}>
          <ProgressBar
            height={6}
            options={{ showSpinner: true }}
            color={currentTheme.isDark ? darkTheme.palette.primary.main : "#000000"}
          />
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeCtx.Provider>
    </Fragment>
  );
};

export default MyApp;
