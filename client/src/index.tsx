import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
