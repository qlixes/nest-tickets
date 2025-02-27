import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { BadRequest } from "src/common/filters/bad-request.filter";
import { AuthDto } from '../../application/dto/auth.dto';
import { AuthService } from '../../application/services/auth.service';

@Controller("auth")
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post()
    @UseFilters(BadRequest)
    auth(@Body() dto: AuthDto) {
        console.log(dto);
    }
}
