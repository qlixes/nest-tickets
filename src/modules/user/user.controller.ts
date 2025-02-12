import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./application/services/user.service";
import { UserDto } from "./application/dto/user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly user: UserService) {}
    
    @Post('register')
    register(@Body() body: UserDto) {
        return "Hello world";
    }

    @Post()
    show() {
        
    }
}