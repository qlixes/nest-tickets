import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository) {}

    async signup(dto: CreateUserDto): Promise<User> {

    }

    async signin(dto: )
}