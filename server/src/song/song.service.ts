import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from './interfaces/song.interface';
import { CreateSongDto } from './dto/create-song.dto';
@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private readonly songModel: Model<Song>) {}

  async create(newSong: CreateSongDto) {
    const { songid, songname, artistname, artistimage, note } = newSong;
    const existSong = await this.checkIfSongExist(newSong.songid);
    if (existSong.length === 0) {
      let newSong = new this.songModel({ id: songid, name: songname, artistname: artistname, artistimage: artistimage, $push: { notes: note } });
      newSong = await newSong.addNote(note).save();
      return newSong;
    } else {
      existSong[0].addNote(note);
      return existSong[0].save();
    }
  }

  async find(songid: string): Promise<Song[]> {
    const songs = await this.songModel.find({ id: songid });
    return songs;
  }

  private async checkIfSongExist(songid: string): Promise<Song[]> {
    const existSong = await this.songModel.find({ id: songid });
    return existSong;
  }
}
