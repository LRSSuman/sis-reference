import { SemesterGrade } from '@sis/types';
import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    grade: { type: String, default: '-' },
});

const semesterGradeSchema = new mongoose.Schema({
    registerNo: { type: String, required: true },
    semesterResults: {
        one: {
            results: [resultSchema],
        },
        two: {
            results: [resultSchema],
        },
        three: {
            results: [resultSchema],
        },
        four: {
            results: [resultSchema],
        },
        five: {
            results: [resultSchema],
        },
        six: {
            results: [resultSchema],
        },
        seven: {
            results: [resultSchema],
        },
        eight: {
            results: [resultSchema],
        },
    },
});

const semesterGradeModel = mongoose.model('SemesterResult', semesterGradeSchema);
export const addSemesterResultData = (data: SemesterGrade) => semesterGradeModel.insertMany(data);
