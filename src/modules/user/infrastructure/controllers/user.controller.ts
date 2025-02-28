import { Body, Controller, Post, UseFilters } from "@nestjs/common";
import { UserService } from "../../application/services/user.service";
import { BadRequest } from "src/common/filters/bad-request.filter";
import { ShowUserDto } from "../../application/dto/show-user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly service: UserService) {}

    @Post("list")
    @UseFilters(BadRequest)
    list(@Body() dto: ShowUserDto) {
        return this.service.showMany(dto);
    }

    // @Post("auth")
    // @UseFilters(BadRequest)
    // auth(@Body() dto: Show) {

    // }

    // @Post("signup")
    // @UseFilters(BadRequest)
    // signup(@Body() dto: Show) {

    // }

    // @Post("forget")
    // @UseFilters(BadRequest)
    // forget(@Body() dto: Show) {

    // }

    // @Post("update")
    // @UseFilters(BadRequest)
    // update(@Body() dto: Show) {

    // }
}