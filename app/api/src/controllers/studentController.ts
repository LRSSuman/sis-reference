import { findRegulationInfo, getAllStudents } from '@models';
import { Request, Response } from 'express';
import { catchAsyncError } from 'middleware';
import { RegulationInfo, Semesters, StudentDTO, StudentDTOType, Subject } from '@sis/types';
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
            const error = student.error.format();

            console.log(error);
            return next(new ErrorHandler('Validation Failed', 400));
        }

        const { registerNo, regulation, semester } = student.data;
        const regulationInfo = await findRegulationInfo(regulation, semester);
        const { subjects } = regulationInfo.semesters[semester as keyof Semesters];

        // const assignment = assignDefaultData(registerNo, subjects);

        res.status(201).json({
            success: true,
        });
    }
);
