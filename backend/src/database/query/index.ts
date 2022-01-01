import * as uuid from 'uuid'
import NotesDBQuery from './NotesDBQuery'
import NoteItem from '../../models/NoteItem'
import CreateNoteRequest from '../../models/CreateNoteRequest';
import NoteDelete from '../../models/NoteDelete';

const noteQuery = new NotesDBQuery();

export async function getAllNotes(userId : string): Promise<NoteItem[]>{
    return noteQuery.getAllNotes(userId)
}

export async function createNoteItem(createTodoRequest : CreateNoteRequest, userId: string): Promise<NoteItem>{   
    const noteId = uuid.v4();
    const item = await noteQuery.createNoteItem({
        userId, 
        noteId, 
        createdAt: new Date().toISOString(),
        done: false,
        ...createTodoRequest
    })
    return item
}

export async function deleteNoteItem(noteId: string, userId: string): Promise<NoteDelete>{
    const item = await noteQuery.deleteNoteItem({
        noteId, 
        userId
    })
    return item
}