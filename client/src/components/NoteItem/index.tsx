import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Note from '../../models/Note'
import { useAuth0 } from "@auth0/auth0-react";
import { deleteNote } from "../../api";

type NoteItemProps = {
  note: Note;
  notes: Note[];
  setNotes: Function;
};

export default function NoteItem({ note, notes, setNotes }: NoteItemProps) {
  const { getAccessTokenSilently } = useAuth0();
  const { noteId, text } = note;

  const onNoteDelete = async (noteId: string) => {
    try {
      const token = await getAccessTokenSilently();
      await deleteNote(token, noteId);
      setNotes(notes.filter(note => note.noteId !== noteId))
    } catch {
      console.log('Note deletion failed')
    }
  }

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          aria-label="delete"
          color="warning"
          sx={{ alignSelf: "flex-end" }}
          onClick={() => onNoteDelete(noteId)}
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
