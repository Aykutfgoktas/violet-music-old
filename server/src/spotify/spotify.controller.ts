import { Controller, Get, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import * as querystring from "querystring"
import { SpotifyService } from './spotify.service';

@Controller('spotify')
export class SpotifyController {
    constructor(private spotifyService: SpotifyService) { }
    private readonly stateKey = 'spotify_auth_state';

    @Get("/login")
    async login(@Res() response: Response): Promise<void> {
        const state = this.generateRandomString(16);
        response.cookie(this.stateKey, state);
        response.redirect(this.spotifyService.loginRedirect(state));
    }

    @Get("/callback")
    async callback(@Res() res: Response, @Req() req: Request): Promise<void> {

        const code = req.query.code || null;
        const state = req.query.state || null;
        const storedState = req.cookies ? req.cookies[this.stateKey] : null;

        if (state === null || state !== storedState) {
            res.redirect('/#' + querystring.stringify({ error: 'state_mismatch', }));
        } else {
            res.clearCookie(this.stateKey);
            const access_token = await this.spotifyService.loginToken(code);
            const user = await this.spotifyService.getUser(access_token);
            console.log(user);

            if (access_token) {
                res.redirect('http://localhost:3000/violet#' + querystring.stringify({ access_token: access_token,/*refresh_token: refresh_token*/ }));
            } else {
                res.redirect('/#' + querystring.stringify({ error: 'invalid_token', }));
            }
        }
    }
    private generateRandomString(length: number): string {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
