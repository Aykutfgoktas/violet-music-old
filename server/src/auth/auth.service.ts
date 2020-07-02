import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"
@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<object> {
        const user = await this.usersService.findOne(username);
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (user && isValidPassword) {
            const { nickname, _id } = user;
            return { nickname, _id };
        }
        return null;
    }

    async login(user: any) {
        const payload = { nickname: user.nickname, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
