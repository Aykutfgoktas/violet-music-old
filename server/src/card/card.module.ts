import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { SongModule } from 'src/song/song.module';
import { NoteModule } from 'src/note/note.module';

@Module({
  imports: [SongModule, NoteModule],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
