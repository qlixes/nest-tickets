import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString, IsStrongPassword } from "class-validator";

export class UserDto {
    
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
    @IsStrongPassword({
        minLength: 12,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    password: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    telegramId: string;
}