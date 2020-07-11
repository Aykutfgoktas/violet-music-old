import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from 'src/notes/schemas/note.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])],
  providers: [NoteService],
  exports: [NoteService],
})
export class NoteModule {}
