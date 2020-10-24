import { Fragment } from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeCtx, { betterLight } from "../components/Theme";
import ProgressBar from "../components/ProgressBar";

import "../styles/main.scss";
import "../styles/badges.scss";
import "../styles/darkscroller.scss";
import "../styles/demotions.scss";
import "../styles/player.scss";

// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME
// TODO: FIX DARK THEME

export default class MyApp extends App {
  public state = { isDark: false };

  public setDark = () => {
    localStorage.setItem("color-theme", "dark");
    this.setState({ isDark: true });
  };

  public setLight = () => {
    localStorage.setItem("color-theme", "light");
    this.setState({ isDark: false });
  };

  public switchTheme = () => {
    if (localStorage.getItem("color-theme")?.toLowerCase() === "dark") {
      this.setLight();
    } else {
      this.setDark();
    }
  };

  public componentDidMount() {
    const selectedTheme =
      localStorage.getItem("color-theme")?.toLowerCase() || undefined;
    if (selectedTheme === "dark") {
      this.setState({ isDark: true });
    }
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <ThemeCtx.Provider
          value={{
            themeState: this.state,
            setDark: this.setDark,
            setLight: this.setLight,
            switchTheme: this.switchTheme,
          }}
        >
          <ThemeProvider theme={this.state.isDark ? betterLight : betterLight}>
            <ProgressBar
              height={6}
              options={{ showSpinner: true }}
              color={
                this.state.isDark ? betterLight.palette.primary.main : "#000000"
              }
            />
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ThemeCtx.Provider>
      </Fragment>
    );
  }
}
