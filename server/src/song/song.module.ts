import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import SongSchema from 'src/song/schemas/song.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SongController } from './song.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }])],
  providers: [SongService],
  exports: [SongService],
  controllers: [SongController],
})
export class SongModule {}
