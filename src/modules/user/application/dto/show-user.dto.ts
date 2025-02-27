import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString, IsStrongPassword } from "class-validator";

export class ShowUserDto {

    @IsNotEmpty()
    @IsString()
    readonly search: string;
}