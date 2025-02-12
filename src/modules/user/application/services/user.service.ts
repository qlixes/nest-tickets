import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { User } from "@prisma/client";

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository) {}
}