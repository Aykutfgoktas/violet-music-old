import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt"
@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async validateUser(username: string, password: string): Promise<object> {
        const user = await this.usersService.findOne(username);
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (user && isValidPassword) {
            const { nickname, _id } = user;
            return { nickname, _id };
        }
        return null;
    }
}
