import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from "./schemas/note.schema";
import SongSchema from "./schemas/song.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }, { name: "Song", schema: SongSchema }])
  ],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule { }
