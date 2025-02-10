import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from 'src/domain/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
