import { HttpException, HttpStatus } from "@nestjs/common"

export class DuplicateDataException extends HttpException {
    constructor() {
        super("Multiple Data !", HttpStatus.FORBIDDEN);
    }
}