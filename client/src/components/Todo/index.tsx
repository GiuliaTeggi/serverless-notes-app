import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo() {
  return (
    <Card>
      <CardContent sx={{ display: "flex" }}>
        <Typography variant="body1">My todo text</Typography>
        <Button aria-label="delete" color="warning">
          <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
