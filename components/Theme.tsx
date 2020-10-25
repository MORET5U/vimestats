import { createMuiTheme } from "@material-ui/core/styles";
import { createContext } from "react";

export const darkTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#1e1e1e",
      },
    },

    MuiTableCell: {
      root: {
        borderBottom: "1px solid #0a0a0a50",
      },
      head: {
        backgroundColor: "#050505",
      },
      stickyHeader: {
        backgroundColor: "#050505",
      },
    },

    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#121212",
        },
      },
    },
  },

  palette: {
    type: "dark",

    primary: {
      light: "#efb7ff",
      main: "#bb86fc",
      dark: "#8858c8",
      contrastText: "#ffffff",
    },

    secondary: {
      light: "#ff7762",
      main: "#db4437",
      dark: "#a2000f",
      contrastText: "#ffffff",
    },
  },
});

export const betterLight = createMuiTheme({
  palette: {
    primary: {
      light: "#efb7ff",
      main: "#bb86fc",
      dark: "#8858c8",
      contrastText: "#ffffff",
    },

    secondary: {
      light: "#ff7762",
      main: "#db4437",
      dark: "#a2000f",
      contrastText: "#ffffff",
    },
  },
});

export const ThemeCtx = createContext({
  themeState: { isDark: false },
  setDark: () => {},
  setLight: () => {},
  switchTheme: () => {},
});

export default ThemeCtx;
