import React, { useState, useEffect } from "react";
import { Box, List, ListItem, CircularProgress } from "@mui/material";
import NoteItem from "../NoteItem";
import Note from "../../models/Note";
import { useAuth0 } from "@auth0/auth0-react";
import { getNotes } from "../../api";
import AddNoteItem from "../AddNoteItem";

export default function NotesList() {
  const { getAccessTokenSilently } = useAuth0();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchNotes = async () => {
        const token = await getAccessTokenSilently();
        const notes = await getNotes(token);
        setNotes(notes);
        setLoading(false);
      };
      fetchNotes();
    } catch (e: unknown) {
      console.log(
        `Failed to fetch todos: ${e instanceof Error ? e.message : e}`
      );
    }
  }, [getAccessTokenSilently]);

  const renderLoading = () => {
    return <CircularProgress sx={{ marginTop: "20px" }} />;
  };

  const renderNotes = () => {
    return (
      <>
        <AddNoteItem notes={notes} setNotes={setNotes} />
        <List sx={{ width: "100%", maxWidth: "400px" }}>
          {notes.map((note, index) => (
            <ListItem sx={{ width: "100%" }} key={index}>
              <NoteItem note={note} notes={notes} setNotes={setNotes}/>
            </ListItem>
          ))}
        </List>
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      {loading ? renderLoading() : renderNotes()}
    </Box>
  );
}
