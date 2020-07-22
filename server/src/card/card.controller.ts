import { Controller, Post, Body, Res, HttpStatus, Get, Param, UseGuards, Request, Query, BadRequestException } from '@nestjs/common';
import { Response } from 'express';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles/roles.guard';

/**
 * * CreateCardDto
 * @params header:string
 * @params body:string
 * @params songname:string
 * @params songid:stringg
 * @params bestpart:string
 * @params artistname:string
 * @params artistimage:string
 */

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}
  @Roles('user')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('create')
  async createNote(@Res() res: Response, @Body() createCardDto: CreateCardDto, @Request() req): Promise<Response> {
    try {
      const user = req.user;
      const note = await this.cardService.create(createCardDto, user);
      return res.status(HttpStatus.CREATED).json({ status: 200, msg: 'Note has been created.', note });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.CREATED).json({ status: 200, msg: error.message });
    }
  }
  /** Get the notes for the current playing song. Get the id of the Spotify songs id */
  @Get('find/:id')
  async getnotes(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    const notes = await this.cardService.find(id);
    console.log(notes);
    if (notes) {
      return res.status(HttpStatus.ACCEPTED).json({ status: 202, msg: 'success', songWithNotes: notes });
    } else {
      return res.status(HttpStatus.ACCEPTED).json({ status: 202, msg: 'not found', notes: [] });
    }
  }
}
