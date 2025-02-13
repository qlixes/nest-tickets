import { BadRequestException, Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { Request, Response } from 'express';

// @Catch(BadRequestException)
export class BadRequestFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        response.status(status).json({
            code: "111",
            message: exception.message,
        });
    }
}