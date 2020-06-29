import { Module } from '@nestjs/common';
import { SpotifyController } from './spotify.controller';
import { SpotifyService } from './spotify.service';

@Module({
  imports: [],
  providers: [SpotifyService],
  controllers: [SpotifyController]
})
export class SpotifyModule { }
