import { HttpException, HttpStatus } from "@nestjs/common"

export class EmptyDataException extends HttpException {
    constructor() {
        super("Data not found !", HttpStatus.NOT_FOUND);
    }
}