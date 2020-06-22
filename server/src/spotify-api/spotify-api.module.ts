import { Module } from '@nestjs/common';
import { SpotifyApiController } from './spotify-api.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [SpotifyApiController]
})
export class SpotifyApiModule { }
