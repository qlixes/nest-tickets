import { Controller, Post, UseFilters } from '@nestjs/common';
import { UserService } from './modules/user/application/services/user.service';
import { BadRequest } from './common/filters/bad-request.filter';

@Controller()
export class AppController {

    constructor(
        private readonly user: UserService,
    ) {}

    @Post('user/show')
    @UseFilters(BadRequest)
    async getUser() {
        return this.user.show();
    }
}
