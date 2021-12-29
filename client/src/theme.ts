import { ThemeOptions, createTheme } from "@mui/material";

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    fontSize: 16,
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
