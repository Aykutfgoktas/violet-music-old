import { Document } from "mongoose";
import { NoteDate } from "./date.bestpart.interface";

export interface Note extends Document {
    readonly header: string;
    readonly body: string;
    readonly nickname: string;
    readonly date: NoteDate;
    readonly bestPart: { minutes: number, seconds: number };
}