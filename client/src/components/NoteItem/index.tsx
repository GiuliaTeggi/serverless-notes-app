import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Note from '../../models/Note'

type NoteItemProps = {
  note: Note
};

export default function NoteItem({ note }: NoteItemProps) {
  const { text } = note;
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          aria-label="delete"
          color="warning"
          sx={{ alignSelf: "flex-end" }}
        >
          <DeleteIcon />
        </Button>
        <Typography variant="body1" sx={{ flexGrow: "1" }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
