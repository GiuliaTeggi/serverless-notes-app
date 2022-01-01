import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Modal,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Note from "../../models/Note";
import { useAuth0 } from "@auth0/auth0-react";
import { createNote } from "../../api";

type AddNoteItemProps = {
  notes: Note[];
  setNotes: Function;
};

export default function AddNoteItem({
  notes,
  setNotes,
}: AddNoteItemProps) {
  const { getAccessTokenSilently } = useAuth0();
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const onNoteCreate = async () => {
    console.log("TEXT", text)
    try {
      const token = await getAccessTokenSilently();
      const newNote: Note = await createNote(token, {
        text,
        done: false,
      });
      setNotes([...notes, newNote]);
      handleClose()
    } catch {
      console.log("Failed to create new note");
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        sx={{ minWidth: "200px", margin: "20px 0" }}
      >
        Add Note
        <AddIcon />
      </Button>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              width: "100%",
              maxWidth: "300px",
              minHeight: "300px",
              marginTop: "20vh",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 0,
                width: "100%",
                border: "none",
              }}
            >
              <TextField
                autoFocus
                onChange={e => onTextChange(e)}
                aria-label="Write your new note here"
                placeholder="Note"
                id="note-content"
                minRows={8}
                variant="outlined"
                multiline
                fullWidth
                sx={{ border: "none" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "20px",
                  p: "0 20px",
                  width: "100%",
                }}
              >
                <Button
                  aria-label="delete"
                  color="error"
                  onClick={() => handleClose()}
                >
                  Cancel
                </Button>
                <Button
                  aria-label="delete"
                  color="success"
                  onClick={e => onNoteCreate()}
                >
                  Save
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
