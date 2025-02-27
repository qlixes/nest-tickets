import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

export type Response<T> = {
    code: string;
    message: string;
    data: T;
}

@Injectable()
export class ResponseHandlerInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next
            .handle()
            .pipe(
                map((res: unknown) => this.responseHandler(res, context)),
                catchError((err: HttpException) =>
                    throwError(() => this.errorHandler(err, context)),
                ),
            );
    }

    errorHandler(exception: HttpException, context: ExecutionContext) {

        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        const ctx = context.switchToHttp();
        const response = ctx.getResponse();

        const format = {
            code: "111",
            message: exception.message,
        };

        // response
        response.status(status).json(format);

        // show in console
        // return format.message;
        // return exception.message;
    }

    responseHandler(res: any, context: ExecutionContext) {

        const ctx = context.switchToHttp();
        const response = ctx.getResponse();

        const format = {
            code: "000",
            message: "Succesfully",
            data: res,
        };

        // response
        response.status(HttpStatus.ACCEPTED).json(format);

        // show in console
        // return format.message;
    }
}