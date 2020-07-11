import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotifyModule } from './spotify/spotify.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { SongModule } from './song/song.module';
import { NoteModule } from './note/note.module';
import { CardModule } from './card/card.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }),
    SpotifyModule,
    AuthModule,
    UsersModule,
    SongModule,
    NoteModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
