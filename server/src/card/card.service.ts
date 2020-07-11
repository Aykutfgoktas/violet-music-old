import { Injectable } from '@nestjs/common';
import { SongService } from 'src/song/song.service';
import { NoteService } from 'src/note/note.service';
import { CreateCardDto } from './dto/create-note.dto';
import { Song } from 'src/notes/interfaces/song.interface';
@Injectable()
export class CardService {
  constructor(private songService: SongService, private noteService: NoteService) {}

  async create(createCardDto: CreateCardDto): Promise<Song> {
    const { header, body, nickname, bestPart, songid, songname, artistname, artistimage } = createCardDto;
    const note = await this.noteService.create({ header, body, nickname, bestPart });
    const song = await this.songService.create({ songid, songname, artistname, artistimage, note });
    return song;
  }

  async find(songid: string) {
    const song = this.songService.find(songid);
    return song;
  }
}
