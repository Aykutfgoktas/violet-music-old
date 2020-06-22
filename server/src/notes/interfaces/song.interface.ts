import { Document } from "mongoose";
import { Note } from "./note.interface";
export interface Song extends Document {
    readonly id: string;
    readonly name: string;
    readonly artistname: string;
    readonly notes: Note[];
    readonly artistimage: string;
    readonly noteCount: number;
    addNote(note: Note): Song;
}