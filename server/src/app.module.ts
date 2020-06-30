import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { SpotifyModule } from './spotify/spotify.module';
import { NotesModule } from "./notes/notes.module";
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, }), SpotifyModule, NotesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
