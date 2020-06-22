import { Controller, Get, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import * as querystring from "querystring"
import * as request from "request";

@Controller('spotify-api')
export class SpotifyApiController {
    private readonly stateKey = 'spotify_auth_state';
    private readonly client_id = process.env.CLIENT_ID;
    private readonly client_secret = process.env.CLIENT_SECRET;
    private readonly redirect_uri = process.env.REDIRECT_URI;
    
    @Get("/login")
    async login(@Res() response: Response): Promise<void> {
        const state = this.generateRandomString(16);
        response.cookie(this.stateKey, state);
        // your application requests authorization
        const scope = 'user-read-private user-read-playback-state user-modify-playback-state';
        response.redirect(
            'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: this.client_id,
                scope: scope,
                redirect_uri: this.redirect_uri,
                state: state,
            })
        );
    }

    @Get("/callback")
    async callback(@Res() res: Response, @Req() req: Request): Promise<void> {
        // your application requests refresh and access tokens
        // after checking the state parameter

        const code = req.query.code || null;
        const state = req.query.state || null;
        const storedState = req.cookies ? req.cookies[this.stateKey] : null;

        if (state === null || state !== storedState) {
            res.redirect(
                '/#' +
                querystring.stringify({
                    error: 'state_mismatch',
                })
            );
        } else {
            res.clearCookie(this.stateKey);

            const authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                form: {
                    code: code,
                    redirect_uri: this.redirect_uri,
                    grant_type: 'authorization_code',
                },
                headers: {
                    Authorization: 'Basic ' + Buffer.from(this.client_id + ':' + this.client_secret).toString('base64'),
                },
                json: true,
            };

            request.post(authOptions, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    const access_token = body.access_token,
                        refresh_token = body.refresh_token;
                    const options = {
                        url: 'https://api.spotify.com/v1/me',
                        headers: { Authorization: 'Bearer ' + access_token },
                        json: true,
                    };

                    // use the access token to access the Spotify Web API
                    request.get(options, function (error, response, body) {
                        console.log(body);
                    });

                    // we can also pass the token to the browser to make requests from there
                    res.redirect(
                        'http://localhost:3000/violet#' +
                        querystring.stringify({
                            access_token: access_token,
                            //refresh_token: refresh_token,
                        })
                    );
                } else {
                    res.redirect(
                        '/#' +
                        querystring.stringify({
                            error: 'invalid_token',
                        })
                    );
                }
            });
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
