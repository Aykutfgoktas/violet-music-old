import * as mongoose from 'mongoose';
import { NoteSchema } from '../../note/schemas/note.schema';

const SongSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Song id is required'],
  },
  name: {
    type: String,
    required: [true, 'Song name is required'],
  },
  artistname: {
    type: String,
    required: [true, 'Artist name is required'],
  },
  notes: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'Note', default: [] }],
  artistimage: {
    type: String,
  },
  noteCount: {
    type: Number,
    default: 0,
  },
});

SongSchema.methods.addNote = function(noteid) {
  this.notes.push(noteid);
  this.noteCount = this.noteCount + 1;
  return this;
};

export default SongSchema;
