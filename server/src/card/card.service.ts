import { Injectable } from '@nestjs/common';
import { SongService } from 'src/song/song.service';
import { NoteService } from 'src/note/note.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Song } from 'src/song/interfaces/song.interface';
@Injectable()
export class CardService {
  constructor(private songService: SongService, private noteService: NoteService) {}

  async create(createCardDto: CreateCardDto, user): Promise<Song> {
    const { header, body, bestPart, songid, songname, artistname, artistimage } = createCardDto;
    const note = await this.noteService.create({ header, body, bestPart, song: songid, user });
    const song = await this.songService.create({ songid, songname, artistname, artistimage, note });
    return song;
  }

  async find(songid: string) {
    const song = await this.songService.find(songid);
    console.log(song);
    return song;
  }

  async findPopular(): Promise<Song[]> {
    return await this.songService.findPopular();
  }

  async getSongsWithPagination(page: number): Promise<{ foundSongs: Song[]; count: number }> {
    return this.songService.getSongsWithPagination(page);
  }
}
