import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsString, IsStrongPassword } from "class-validator";

export class RoleDto {
    @IsNumberString()
    id: number;
    name: string;
}