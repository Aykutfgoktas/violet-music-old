import { Note } from 'src/note/interfaces/note.interface';

export class CreateSongDto {
  readonly songname: string;
  readonly songid: string;
  readonly artistname: string;
  readonly artistimage: string;
  readonly note: Note;
}
