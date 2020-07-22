import { Controller, Res, HttpStatus, Get, Query, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
  constructor(private songService: SongService) {}

  @Get('find')
  async getListOfSongs(@Query() query: { page: number }, @Res() res: Response): Promise<Response> {
    const page = query.page;
    if (query.page) {
      try {
        const foundedSong = await this.songService.getSongsWithPagination(page);
        return res.status(HttpStatus.ACCEPTED).json({ status: 'success', songs: foundedSong.songs, count: foundedSong.count });
      } catch (error) {
        console.log(error);
        return res.json({ status: 'error', foundSongs: [], count: 0 });
      }
    } else {
      throw new BadRequestException('Please enter a valid query string');
    }
  }

  @Get('popular')
  async getPopularSongs(@Res() res: Response): Promise<Response> {
    const popularsongs = await this.songService.findPopular();
    return res.status(HttpStatus.ACCEPTED).json({ status: 'success', popularsongs });
  }
}
