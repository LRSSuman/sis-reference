import { InternalMark } from '@sis/types';
import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema(
    {
        code: { type: String, required: true },
        name: { type: String, required: true },
        mark: { type: Number, default: 0 },
    },
    { _id: false }
);

const internalMarkSchema = new mongoose.Schema({
    registerNo: { type: String, required: true },
    internalResults: {
        one: {
            results: [resultSchema],
        },
        two: {
            results: [resultSchema],
        },
        three: {
            results: [resultSchema],
        },
        semester: {
            results: [resultSchema],
        },
    },
});

const internalMarkModel = mongoose.model('InternalMark', internalMarkSchema);
export const addinternalMarkData = (data: InternalMark) => internalMarkModel.insertMany(data);
