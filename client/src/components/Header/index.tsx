import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <header className="header">
      <Box display="flex" justifyContent="center">
        <Typography variant="h1">Things To Do</Typography>
      </Box>
    </header>
  );
}
