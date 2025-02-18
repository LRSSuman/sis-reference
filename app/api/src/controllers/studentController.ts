import { createStudent, findRegulationInfo, getAllStudents } from '@models';
import { Request, Response } from 'express';
import { catchAsyncError } from 'middleware';
import { RegulationInfo, Semesters, Student, StudentDTO, StudentDTOType, Subject } from '@sis/types';
import { NextFunction } from 'express-serve-static-core';
import { assignDefaultData, ErrorHandler } from '@utils';

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
            const error = student.error.format();

            console.log(error);
            return next(new ErrorHandler('Validation Failed', 400));
        }

        await assignDefaultData([student.data as Student]);
        const newStudent = await createStudent(student.data);

        res.status(201).json({
            success: true,
            newStudent,
        });
    }
);
