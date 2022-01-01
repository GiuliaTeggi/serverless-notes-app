import Axios from "axios";
import Note from "../models/Note";
import CreateNoteRequest from "../models/CreateNoteRequest";

export async function getNotes(idToken: string): Promise<Note[]> {
  const response = await Axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/notes`,
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
    `${process.env.REACT_APP_API_ENDPOINT}/notes`,
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
