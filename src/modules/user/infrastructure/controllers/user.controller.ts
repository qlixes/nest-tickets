import { Controller, Post, UseFilters } from "@nestjs/common";
import { UserService } from "../../application/services/user.service";
import { BadRequest } from "src/common/filters/bad-request.filter";

@Controller("user")
export class UserController {
    constructor(private readonly service: UserService) {}

    @Post("show-all")
    @UseFilters(BadRequest)
    findAll() {
        return this.service.showMany();
    }
}