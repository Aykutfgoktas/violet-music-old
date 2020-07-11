import * as mongoose from 'mongoose';
import { NoteSchema } from '../../note/schemas/note.schema';
import { Note } from '../../note/interfaces/note.interface';

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
  notes: {
    type: [NoteSchema],
    default: [],
  },
  artistimage: {
    type: String,
  },
  noteCount: {
    type: Number,
    default: 0,
  },
});

SongSchema.methods.addNote = function(note: Note) {
  this.notes.push(note);
  this.noteCount = this.noteCount + 1;
  return this;
};

export default SongSchema;
