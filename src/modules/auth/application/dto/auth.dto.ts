import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class AuthDto {
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
}