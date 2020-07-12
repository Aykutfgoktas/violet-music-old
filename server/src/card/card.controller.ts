import { Controller, Post, Body, Res, HttpStatus, Get, Param, UseGuards, Request, Query, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}
  @Roles('user')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create')
  async createNote(@Res() res: Response, @Body() createCardDto: CreateCardDto, @Request() req): Promise<Response> {
    const user = req.user;
    const songCard = await this.cardService.create(createCardDto, user);
    return res.status(HttpStatus.CREATED).json(songCard);
  }

  @Get('find/:id')
  async getnotes(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    const notes = await this.cardService.find(id);
    return res.status(HttpStatus.ACCEPTED).json({ status: 'success', notes });
  }

  @Get('find')
  async getListOfSongs(@Query() query: { page: number }, @Res() res: Response): Promise<Response> {
    const page = query.page;
    if (query.page) {
      try {
        const foundedSong = await this.cardService.getSongsWithPagination(page);
        return res.status(HttpStatus.ACCEPTED).json({ status: 'success', foundSongs: foundedSong.foundSongs, count: foundedSong.count });
      } catch (error) {
        console.log(error);
        return res.json({ status: 'error', foundSongs: [], count: 0 });
      }
    } else {
      throw new BadRequestException('Please enter a valid query string');
    }
  }

  @Get('findPopular')
  async getPopularSongs(@Res() res: Response): Promise<Response> {
    const popularsongs = await this.cardService.findPopular();
    return res.status(HttpStatus.ACCEPTED).json({ status: 'success', popularsongs });
  }
}
