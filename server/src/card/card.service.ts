import { Injectable } from '@nestjs/common';
import { SongService } from 'src/song/song.service';
import { NoteService } from 'src/note/note.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Song } from 'src/song/interfaces/song.interface';
import { Note } from 'src/note/interfaces/note.interface';
@Injectable()
export class CardService {
  constructor(private songService: SongService, private noteService: NoteService) {}

  async create(createCardDto: CreateCardDto, user): Promise<Note> {
    const { header, body, bestPart, songid, songname, artistname, artistimage } = createCardDto;

    const note = await this.noteService.create({ header, body, bestPart, song: songid, user });
    const song = await this.songService.create({ songid, songname, artistname, artistimage, note });
    return note;
  }

  async find(songid: string): Promise<Song> {
    const song = await this.songService.find(songid);
    return song;
  }
}
