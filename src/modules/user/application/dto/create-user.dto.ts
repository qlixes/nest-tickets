import { Expose } from "class-transformer";
import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    
    @Expose({ name: "role_id" })
    @IsNotEmpty()
    @IsNumber()
    readonly roleId: number;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 12,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    readonly password: string;

    @IsNotEmpty()
    @IsNumberString()
    readonly phone: string;

    @Expose({ name: "telegram_id" })
    @IsNotEmpty()
    @IsString()
    readonly telegramId: string;
}