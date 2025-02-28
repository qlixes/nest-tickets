import { HttpException, HttpStatus } from "@nestjs/common"

export class InvalidDataException extends HttpException {
    constructor() {
        super("Invalid Data !", HttpStatus.FORBIDDEN);
    }
}