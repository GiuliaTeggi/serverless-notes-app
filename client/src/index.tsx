import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import App from "./components/App";
import { authConfig } from "./config"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Auth0Provider
        domain={authConfig.domain}
        clientId={authConfig.clientId}
        redirectUri={authConfig.redirectUri}
      >
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
