import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./application/dto/forget-user.dto";
import { CreateUserDto } from "./application/dto/create-user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly user: UserService) {}
    
    @Post()
    create(@Body() body: CreateUserDto) {

    }
}