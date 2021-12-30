import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" sx={{ flexGrow: "1" }}>
          My todo text
        </Typography>
        <Button aria-label="delete" color="warning">
          <DeleteIcon />
        </Button>
      </CardContent>
    </Card>
  );
}
