import { Document } from "mongoose";
import { Note } from "../../notes/interfaces/note.interface";
export interface User extends Document {
    readonly _id;
    readonly nickname: string;
    readonly password: string;
    readonly notes: Note[];
}