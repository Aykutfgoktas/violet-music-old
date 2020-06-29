import { Injectable } from '@nestjs/common';
import * as rp from "request-promise";
import * as querystring from "querystring"

@Injectable()
export class SpotifyService {
    private readonly client_id = process.env.CLIENT_ID;
    private readonly client_secret = process.env.CLIENT_SECRET;
    private readonly redirect_uri = process.env.REDIRECT_URI;
    private scope = 'user-read-private user-read-playback-state user-modify-playback-state';

    loginRedirect(state: string): string {
        return 'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: this.client_id,
                scope: this.scope,
                redirect_uri: this.redirect_uri,
                state: state,
            });
    }
    async loginToken(code): Promise<string | undefined> {
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

        try {
            const response = await rp.post(authOptions);
            return response.access_token;
        } catch (error) {
            console.log(error)
            return undefined;
        }
    }

    async getUser(access_token: string): Promise<object | undefined> {
        const options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { Authorization: 'Bearer ' + access_token },
            json: true,
        };

        try {
            const user = await rp.get(options);
            return user;
        } catch (error) {
            return undefined;
        }

    }

}
