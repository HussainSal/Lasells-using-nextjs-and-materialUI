import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
    h1: {
      fontSize: "50px",
      fontWeight: "500",
      lineHeight: "70px",
    },
    h2: {
      fontSize: "35px",
      fontWeight: "500",
      lineHeight: "50px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "18.96px",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "30px",
    },
    body1: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
    },
    body2: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "30px",
      },
  },
});

export default theme;
