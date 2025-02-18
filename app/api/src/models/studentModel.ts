import { Student } from '@sis/types';
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    profileImage: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
    },
    registerNo: {
        type: Number,
        required: [true, 'Please enter register no'],
    },
    cgpa: {
        type: Number,
        default: 0,
    },
    attendance: {
        type: Number,
        default: 0,
    },
    dues: {
        type: Number,
        default: 0,
    },
    dob: {
        type: String,
        required: [true, 'Please enter Date of Birth'],
    },
    gender: {
        type: String,
        required: [true, 'please select gender'],
        enum: {
            values: ['Male', 'Female'],
            message: 'Please select correct gender',
        },
    },
    department: {
        type: String,
        default: 'CSE',
    },
    year: {
        type: Number,
        required: [true, 'please enter year'],
    },
    regulation: {
        type: String,
        required: [true, 'please enter regulation'],
    },
    semester: {
        type: Number,
        required: [true, 'please enter semester'],
    },
    batch: {
        type: String,
        required: [true, 'please enter batch'],
    },
    arrears: {
        type: Number,
        default: 0,
    },
    degree: {
        type: String,
        default: 'B.E',
    },
    email: {
        type: String,
        required: [true, 'please enter email'],
    },
    mobile: {
        type: Number,
        required: [true, 'please enter mobile no'],
    },
    accomodation: {
        type: String,
        required: [true, 'please select accomodation'],
        enum: {
            values: ['Day Scholar', 'Hosteller'],
            message: 'Please select correct accomodation',
        },
    },
});

export const studentModel = mongoose.model('Student', studentSchema);
export const getAllStudents = () => studentModel.find();
export const createStudent = (data: any) => studentModel.create(data);
export const addStudentData = (data: Student[]) => studentModel.insertMany(data);
export const deleteStudentData = () => studentModel.deleteMany();
