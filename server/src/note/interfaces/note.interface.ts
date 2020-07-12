import { Document, Mongoose } from 'mongoose';
import { NoteDate } from './date.bestpart.interface';
import * as mongoose from 'mongoose';

export interface Note extends Document {
  readonly song: string;
  readonly user: mongoose.Types.ObjectId;
  readonly header: string;
  readonly body: string;
  readonly date: NoteDate;
  readonly bestPart: { minutes: number; seconds: number };
}
