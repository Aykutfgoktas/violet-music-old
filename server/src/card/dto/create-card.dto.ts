import { IsString, MinLength, MaxLength, IsNotEmpty, IsObject } from "class-validator"

export class CreateCardDto {
    @IsNotEmpty({ message: "Note for the header is required." })
    @IsString({ message: "Note for the header must be text." })
    @MinLength(5, { message: "Header's minimum length must be 5 character." })
    @MaxLength(40, { message: "Header's maximum length must be 40 character." })
    readonly header: string;

    @IsNotEmpty({ message: "Note for the body is required." })
    @IsString({ message: "Note for the body must be text." })
    @MinLength(15, { message: "Body of the note's minimum length must be 15 character." })
    @MaxLength(300, { message: "Body of the note's maximum length must be 300 character." })
    readonly body: string;

    /*@IsNotEmpty({ message: "Note for the nickname is required." })
    @IsString({ message: "Note for the nickname must be text." })
    @MinLength(3, { message: "Nickname minimum length must be 3 character." })
    @MaxLength(15, { message: "Nickname maximum length must be 15 character." })
    readonly nickname: string;*/

    @IsNotEmpty({ message: "Note for the song name is required." })
    @IsString({ message: "Note for the song name must be text." })
    readonly songname: string;

    @IsNotEmpty({ message: "Note for the song id is required." })
    @IsString({ message: "Note for the song id must be text." })
    readonly songid: string;

    @IsNotEmpty({ message: "Best part of the song must be given." })
    @IsObject({ message: "Best part of the song must be given as object." })
    readonly bestPart: { minutes: number, seconds: number };


    @IsNotEmpty({ message: "Note for the artist name is required." })
    @IsString({ message: "Note for the artist name must be text." })
    readonly artistname: string;

    @IsNotEmpty({ message: "Note for the artist image is required." })
    @IsString({ message: "Note for the artist image must be text." })
    readonly artistimage: string;

}