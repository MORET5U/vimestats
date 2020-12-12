import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#f0e7ff",
      100: "#cfb9fa",
      200: "#b08bf3",
      300: "#905dee",
      400: "#702fe8",
      500: "#5717cf",
      600: "#4411a1",
      700: "#300c74",
      800: "#1d0648",
      900: "#0c011c",
    },
  },
  components: {
    Tooltip: {
      baseStyle: {
        fontSize: "md",
        bg: "black",
        color: "white",
      },
    },
  },
  // styles: {
  //   global: ({ colorMode }) => ({
  //     body: {
  //       bg: colorMode !== "dark" ? "white" : "#171717",
  //       lineHeight: "base",
  //     },
  //   }),
  // },
});

export default customTheme;
