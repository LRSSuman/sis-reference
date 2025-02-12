import { getAllStudents } from '@models';
import { Request, Response } from 'express';
import { catchAsyncError } from 'middleware';
import { StudentDTO, StudentDTOType } from '@sis/types';
import { NextFunction } from 'express-serve-static-core';
import { ErrorHandler } from '@utils';

export const getStudents = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const students = await getAllStudents();
    return res.status(200).json({
        success: true,
        students,
    });
});

export const newStudent = catchAsyncError(
    async (req: Request<{}, {}, StudentDTO>, res: Response, next: NextFunction) => {
        const student = StudentDTOType.safeParse(req.body);

        if (!student.success) {
            console.log(student.error.format());
            return next(new ErrorHandler('Validation Failed', 400));
        }

        const data = student.data;

        res.status(201).json({
            success: true,
            data,
        });
    }
);
