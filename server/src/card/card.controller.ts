import { Controller, Post, Body, Res, HttpStatus, Get, Param } from '@nestjs/common';
import { Response } from 'express';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-note.dto';
@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}
  @Post('create')
  async createNote(@Res() res: Response, @Body() createCardDto: CreateCardDto): Promise<Response> {
    const songCard = await this.cardService.create(createCardDto);
    return res.status(HttpStatus.CREATED).json(songCard);
  }

  @Get('get/:id')
  async getnotes(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    const notes = await this.cardService.find(id);
    return res.status(HttpStatus.ACCEPTED).json({ status: 'success', notes });
  }
}
