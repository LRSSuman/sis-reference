import { RegulationInfo, Semesters } from '@sis/types';
import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema(
    {
        code: { type: String, required: true },
        name: { type: String, required: true },
    },
    { _id: false }
);

const semesterSchema = new mongoose.Schema(
    {
        subjects: [subjectSchema],
        laboratory: [subjectSchema],
    },
    { _id: false }
);

const regulationInfoSchema = new mongoose.Schema({
    regulation: { type: String, required: true, unique: true },
    semesters: {
        1: semesterSchema,
        2: semesterSchema,
        3: semesterSchema,
        4: semesterSchema,
        5: semesterSchema,
        6: semesterSchema,
        7: semesterSchema,
        8: semesterSchema,
    },
});

export const RegulationInfoModel = mongoose.model('RegulationInfo', regulationInfoSchema);
export const getAllRegulationInfo = () => RegulationInfoModel.find();
export const findRegulationInfo = (regulation: string, semester: number) =>
    RegulationInfoModel.findOne({ regulation }, { [`semesters.${semester}`]: 1 });
export const addRegulationInfoData = (data: RegulationInfo) => RegulationInfoModel.insertMany(data);
export const deleteRegulationInfoData = () => RegulationInfoModel.deleteMany();
