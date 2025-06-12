// theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Segoe UI', sans-serif`,
    body: `'Segoe UI', sans-serif`,
  },
  colors: {
    brand: {
      secondary: "#D66916",
      primaryText: "#206AA5",
      bodyText: "#333333",
      darkText: "#113659",
    },
  },
  styles: {
    global: {
      body: {
        color: "#333333", // texto padrão
        bg: "white",
      },
      h1: {
        fontSize: "3xl",
        fontWeight: "bold",
        color: "#206AA5",
      },
      h2: {
        fontSize: "2xl",
        fontWeight: "semibold",
        color: "#113659",
      },
      p: {
        color: "#333333",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "#D66916",
          color: "white",
          _hover: {
            bg: "#b55711",
          },
        },
        outline: {
          borderColor: "#D66916",
          color: "#D66916",
          _hover: {
            bg: "#fef0e7",
          },
        },
      },
    },
  },
});

export default theme;
