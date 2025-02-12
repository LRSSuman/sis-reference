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
        type: Date,
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
    semester: {
        type: Number,
        required: [true, 'please enter semester'],
    },
    batch: {
        type: String,
        required: [true, 'please enter batch'],
    },
    arrears: {
        type: String,
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
    accomodation: {
        type: String,
        required: [true, 'please select accomodation'],
        enum: {
            values: ['Day Scholor', 'Hosteler'],
            message: 'Please select correct accomodation',
        },
    },
});

export const studentModel = mongoose.model('Student', studentSchema);
export const getAllStudents = () => studentModel.find();
