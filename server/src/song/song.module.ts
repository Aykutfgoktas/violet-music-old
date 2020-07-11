import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import SongSchema from 'src/notes/schemas/song.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }])],
  providers: [SongService],
  exports: [SongService],
})
export class SongModule {}
