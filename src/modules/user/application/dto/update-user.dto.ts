import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString, IsStrongPassword } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsNumber()
    readonly role_id: number;

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

    @IsNotEmpty()
    @IsString()
    readonly telegram_id: string;
}