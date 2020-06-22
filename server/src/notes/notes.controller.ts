import { Controller, Post, Body, Res, HttpStatus, Get, Param } from '@nestjs/common';
import { NotesService } from "./notes.service";
import { CreateNoteDto } from './dto/create-note.dto';
import { Response } from 'express';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) { }
    @Post("create")
    async createNote(@Res() res: Response, @Body() createNotedto: CreateNoteDto): Promise<Response> {
        const newnotes = await this.notesService.createNote(createNotedto);
        return res.status(HttpStatus.CREATED).json(newnotes);
    }

    @Get('getnotes/:id')
    async getnotes(@Param('id') id: string, @Res() res: Response): Promise<Response> {
        const notes = await this.notesService.getNotes(id);
        return res.status(HttpStatus.ACCEPTED).json({ status: 'success', notes })
    }

    @Get("getpopularsongs")
    async getPopularSongs(@Res() res: Response): Promise<Response> {
        const popularsongs = await this.notesService.getPopularSongs();
        return res.status(HttpStatus.ACCEPTED).json({ status: 'success', popularsongs });
    }

    @Get("getlistofsongs/:page")
    async getListOfSongs(@Param('page') page: number, @Res() res: Response): Promise<Response> {
        try {
            const foundedSong = await this.notesService.getListOfSongs(page);
            return res.status(HttpStatus.ACCEPTED).json({ status: 'success', foundSongs: foundedSong.foundSongs, count: foundedSong.count });
        } catch (error) {
            console.log(error);
            return res.json({ status: 'error', foundSongs: [], count: 0 });
        }
    }
}
