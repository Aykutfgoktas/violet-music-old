import { IsString, IsNotEmpty } from 'class-validator';
import { Note } from 'src/note/interfaces/note.interface';

export class CreateSongDto {
  @IsNotEmpty({ message: 'Note for the song name is required.' })
  @IsString({ message: 'Note for the song name must be text.' })
  readonly songname: string;

  @IsNotEmpty({ message: 'Note for the song id is required.' })
  @IsString({ message: 'Note for the song id must be text.' })
  readonly songid: string;

  @IsNotEmpty({ message: 'Note for the artist name is required.' })
  @IsString({ message: 'Note for the artist name must be text.' })
  readonly artistname: string;

  @IsNotEmpty({ message: 'Note for the artist image is required.' })
  @IsString({ message: 'Note for the artist image must be text.' })
  readonly artistimage: string;

  readonly note:Note
}
