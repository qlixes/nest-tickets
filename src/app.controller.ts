import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { UserService } from './modules/user/application/services/user.service';
import { BadRequest } from './common/filters/bad-request.filter';
import { CreateUserDto } from './modules/user/application/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly user: UserService,
  ) {}

  @Post('user/login')
  @UseFilters(BadRequest)
  async getUser() {
    return this.user.show();
  }

  @Post('user/list')
  async getUsers() {}

  @Post('user/store')
  async postUser(@Body() dto: CreateUserDto) {
    return this.user.store(dto);
  }

  @Post('user/update')
  async patchUser() {}

  @Post('user/remove')
  async deleteUser() {}
}
