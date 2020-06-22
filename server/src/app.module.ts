import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { SpotifyApiModule } from './spotify-api/spotify-api.module';
import { NotesModule } from "./notes/notes.module";
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, }), SpotifyApiModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
