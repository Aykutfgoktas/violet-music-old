import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { User } from "./interfaces/user.interface";
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const { nickname, password } = createUserDto;

        const isUserExist = await this.findOne(nickname);
        if (isUserExist) {
            return undefined;
        } else {
            const hashedPassword = await bcrypt.hash(password, 12);
            const createdUser = this.userModel.create({ nickname, password: hashedPassword });
            return createdUser;
        }
    }

    async findOne(nickname: string): Promise<User | undefined> {
        const foundUser = await this.userModel.find({ nickname });
        if (foundUser.length > 0) {
            return foundUser[0];

        } else {
            return undefined
        }
    }
}
