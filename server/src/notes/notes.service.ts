import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Note } from "./interfaces/note.interface";
import { Song } from "./interfaces/song.interface";
import { CreateNoteDto } from "./dto/create-note.dto";
import { NoteDate } from './interfaces/date.bestpart.interface';

@Injectable()
export class NotesService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>, @InjectModel('Song') private readonly songModel: Model<Song>) { }

    async createNote(createNoteDto: CreateNoteDto): Promise<Song> {
        const date = this.getDateNow();
        const { header, body, nickname, bestPart, songid, songname, artistname, artistimage } = createNoteDto;
        const note = new this.noteModel({ header, body, nickname, date, bestPart });
        const existSong = await this.songModel.find({ id: songid });
        if (existSong.length === 0) {
            let newSong = new this.songModel({ id: songid, name: songname, artistname: artistname, artistimage: artistimage, $push: { notes: note } });
            newSong = await newSong.addNote(note).save();
            return newSong;
        } else {
            existSong[0].addNote(note);
            return existSong[0].save();
        }
    }

    async getNotes(songid: string): Promise<Song[]> {
        const notes = await this.songModel.find({ id: songid });
        return notes;
    }

    async getPopularSongs(): Promise<Song[]> {
        const popularsongs = await this.songModel.find({}).select('id name artistimage artistname -_id').sort('-noteCount').limit(5);
        return popularsongs;

    }

    async getListOfSongs(page: number): Promise<{ foundSongs: Song[], count: number }> {
        const count = await this.songModel.countDocuments();
        const foundSongs = await this.songModel.find({})
            .sort('name')
            .select('name artistname artistimage noteCount id')
            .skip(5 * page - 5)
            .limit(5);
        return { foundSongs, count };
    }

    private getDateNow(): NoteDate {
        const d = new Date();
        return { day: d.getDate(), month: d.getMonth() + 1, year: d.getFullYear() }
    }
}
