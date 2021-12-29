import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu";

export default function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <AppBar
      position="static"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Toolbar sx={{ width: "100%", maxWidth: "lg", m: "0 auto" }}>
        <Typography variant="h1" sx={{ flexGrow: 1 }}>
          Things To Do
        </Typography>
        {isAuthenticated && <ProfileMenu />}
      </Toolbar>
    </AppBar>
  );
}
