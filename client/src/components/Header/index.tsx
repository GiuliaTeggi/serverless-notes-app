import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <header className="header">
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        margin: "20px"
      }}>
        <Typography variant="h1">Things To Do</Typography>
      </Box>
    </header>
  );
}
