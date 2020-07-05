import * as mongoose from 'mongoose';
import { NoteSchema } from '../../notes/schemas/note.schema';
export const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, 'Nickname of the user is required.'],
  },
  password: {
    type: String,
    required: [true, 'Password of the user is required.'],
  },
  role: {
    type: String,
    default: 'user',
  },
  notes: {
    type: [NoteSchema],
    default: [],
  },
});
