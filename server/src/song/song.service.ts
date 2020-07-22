import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from './interfaces/song.interface';
import { CreateSongDto } from './dto/create-song.dto';
@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private readonly songModel: Model<Song>) {}

  async create(newSong: CreateSongDto): Promise<Song> {
    const { songid, songname, artistname, artistimage, note } = newSong;
    const existSong = await this.checkIfSongExist(newSong.songid);
    if (existSong.length === 0) {
      const newSong = new this.songModel({ id: songid, name: songname, artistname: artistname, artistimage: artistimage });
      return await newSong.addNote(note._id).save();
    } else {
      existSong[0].addNote(note);
      return existSong[0].save();
    }
  }

  async find(songid: string): Promise<Song> {
    const songs = await this.songModel
      .findOne({ id: songid })
      .populate({ path: 'notes', select: '-__v', populate: { path: 'user', select: 'nickname' } })
      .select('-__v -_id');

    return songs;
  }

  async findPopular(): Promise<Song[]> {
    const popularsongs = await this.songModel
      .find({})
      .select('id name artistimage artistname noteCount -_id')
      .sort('-noteCount')
      .limit(5);
    return popularsongs;
  }

  async getSongsWithPagination(page: number): Promise<{ songs: Song[]; count: number }> {
    const count = await this.songModel.countDocuments();
    const songs = await this.songModel
      .find({})
      .sort('name')
      .select('name artistname artistimage noteCount id')
      .skip(5 * page - 5)
      .limit(5);
    return { songs, count };
  }

  private async checkIfSongExist(songid: string): Promise<Song[]> {
    const existSong = await this.songModel.find({ id: songid });
    return existSong;
  }
}
