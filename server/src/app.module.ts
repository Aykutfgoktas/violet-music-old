import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { SpotifyModule } from './spotify/spotify.module';
import { NotesModule } from "./notes/notes.module";
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, }), SpotifyModule, NotesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
