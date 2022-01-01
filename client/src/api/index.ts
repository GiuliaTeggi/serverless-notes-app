import Axios from "axios";
import Note from "../models/Note";
import CreateNoteRequest from "../models/CreateNoteRequest";

const apiEndpoint= process.env.REACT_APP_API_ENDPOINT;

export async function getNotes(idToken: string): Promise<Note[]> {
  const response = await Axios.get(
    `${apiEndpoint}/notes`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
  console.log("Todos:", response.data);
  return response.data.items;
}

export async function createNote(
  idToken: string,
  newNote: CreateNoteRequest
): Promise<Note> {
  const response = await Axios.post(
    `${apiEndpoint}/notes`,
    JSON.stringify(newNote),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
  return response.data.item;
}

export async function deleteNote(
  idToken: string,
  noteId: string
): Promise<void> {
  await Axios.delete(`${apiEndpoint}/notes/${noteId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    }
  })
}
