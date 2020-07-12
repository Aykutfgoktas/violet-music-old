import { Document } from 'mongoose';
import { Note } from '../../note/interfaces/note.interface';
export interface User extends Document {
  readonly _id;
  readonly nickname: string;
  readonly password: string;
  readonly role: string;
  readonly notes: Note[];
}
