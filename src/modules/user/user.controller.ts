import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { UserService } from "./application/services/user.service";
import { UserDto } from "./application/dto/user.dto";
import { BadRequestFilter } from "src/common/filters/bad-request.filter";

@Controller("user")
export class UserController {
    constructor(private readonly user: UserService) {}
    
    @Post('signup')
    @UseFilters(BadRequestFilter)
    register(@Body() body: UserDto) {
        return this.user.signup(body);
    }
}