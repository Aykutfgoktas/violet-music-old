const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  header: {
    type: String,
    required: [true, 'Header of the notes is required.'],
  },
  body: {
    type: String,
    required: [true, 'Body of the notes is required.'],
  },
  nickname: {
    type: String,
    required: [true, 'Nickname of the notes is required.'],
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

const SongSchema = new Schema({
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
  artistimage:{
    type:String
  },
  noteCount: {
    type: Number,
    default: 0,
  },
});

SongSchema.methods.addNote = function (note) {
  this.notes.push(note);
  this.noteCount = this.noteCount + 1;
  return this;
};

const Note = mongoose.model('note', NoteSchema);
const Song = mongoose.model('song', SongSchema);
exports.Note = Note;
exports.Song = Song;
