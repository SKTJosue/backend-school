import { HttpCode, HttpStatus } from '@nestjs/common';
import { RequestResponseSuccess, ResponseBody } from '../interface/request-response-interface';

export class SuccessCustomResponse {
    @HttpCode(HttpStatus.OK)
    static get(message: string, data: ResponseBody = null): RequestResponseSuccess {
        return {
            success: true,
            message,
            data,
        };
    }
}