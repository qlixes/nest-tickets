import { Controller, Post, UseFilters } from '@nestjs/common';
import { UserService } from './modules/user/application/services/user.service';
import { RoleService } from './modules/role/application/services/role.service';
import { UserDto } from './modules/user/application/dto/user.dto';
import { BadRequestFilter } from './common/filters/bad-request.filter';

@Controller('app')
export class AppController {
    constructor(
        private readonly user: UserService,
        private readonly role: RoleService
    ) {}

    @Post("/user/signup")
    @UseFilters(BadRequestFilter)
    async signup(dto: UserDto) {

    }
}
