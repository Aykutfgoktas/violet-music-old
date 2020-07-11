import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './interfaces/note.interface';
import { NoteDate } from './interfaces/date.bestpart.interface';
import { CreateNoteDto } from './dto/create-note.dto';
@Injectable()
export class NoteService {
  constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const date = this.getDateNow();
    const { header, body, nickname, bestPart } = createNoteDto;
    const note = new this.noteModel({ header, body, nickname, date, bestPart });
    const newNotes = await note.save();
    return newNotes;
  }
  private getDateNow(): NoteDate {
    const d = new Date();
    return { day: d.getDate(), month: d.getMonth() + 1, year: d.getFullYear() };
  }
}
