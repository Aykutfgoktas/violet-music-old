import * as mongoose from "mongoose";

export const NoteSchema = new mongoose.Schema({
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
})