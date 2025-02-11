import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsNumber()
    roleId: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    telegramId: string;
}