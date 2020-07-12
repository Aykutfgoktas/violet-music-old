import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
  song: {
    type: String,
    ref: 'Song',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Nickname of the notes is required.'],
  },
  header: {
    type: String,
    required: [true, 'Header of the notes is required.'],
  },
  body: {
    type: String,
    required: [true, 'Body of the notes is required.'],
  },
  date: {
    day: Number,
    month: Number,
    year: Number,
  },
  bestPart: {
    minutes: { type: Number, default: -1 },
    seconds: { type: Number, default: -1 },
  },
});
