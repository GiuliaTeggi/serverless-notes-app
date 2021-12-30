import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import Routing from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
