import { NextFunction, Request, Response } from 'express-serve-static-core';
import { ErrorHandler } from '@utils';

export const errorMiddleware = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    let { message, statusCode } = err;
    statusCode = err.statusCode ?? 500;

    if (process.env.NODE_ENV === 'development') {
        res.status(statusCode).json({
            success: false,
            message,
            stack: err.stack,
            error: err,
        });
        return;
    } else if (process.env.NODE_ENV === 'production') {
        let error = new ErrorHandler(message, statusCode);

        if (err.name === 'ValidationError') {
            message = Object.values((err as any).errors)
                .map((value: any) => value.message)
                .join(',');
            error = new ErrorHandler(message, 400);
        }

        if (err.name === 'CastError') {
            message = `Resource not found: ${(err as any).path}`;
            error = new ErrorHandler(message, 404);
        }

        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || 'Internal Server Error',
        });
        return;
    }
};
