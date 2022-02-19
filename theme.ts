import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  body: "Work Sans",
};

const breakpoints = createBreakpoints({
  sm: "400px",
  md: "520px",
  lg: "640px",
  xl: "800px",
});

const theme = extendTheme({
  colors: {
    brand: {
      darkBlue: "#141536",
      darkPurple: "#0F0028",
      darkViolet: "#1C004A",
      lightBlue: "#067fa7",
      magenta: "#F009FE",
      phlox: "#D509FB",
      ultramarine: "#6E3AFF",
      violet: "#8005F3",
      white: "#fff",
    },
  },
  styles: {
    global: {
      html: {
        background: "url(background.png) no-repeat center center fixed",
        backgroundSize: "cover",
      },
      body: {
        background: "none",
        color: "brand.white",
      },
    },
  },
  fonts,
  breakpoints,
});

export default theme;
