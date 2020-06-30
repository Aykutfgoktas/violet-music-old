import { IsString, MinLength, MaxLength, IsNotEmpty, IsObject } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty({ message: "Nickname for the user is required." })
    @IsString({ message: "Nickname for the user must be text." })
    @MinLength(3, { message: "Nickname minimum length must be 3 character." })
    @MaxLength(15, { message: "Nickname maximum length must be 15 character." })
    readonly nickname: string;

    readonly password: string;
}