import mongoose from 'mongoose';

const downloadNotesSchema = new mongoose.Schema({
    noteUrl: { type: String },
    code: { type: String, required: [true, 'Please enter a subject code'] },
    name: { type: String, required: [true, 'Please enter a subject name'] },
    regulation: {
        type: String,
        required: [true, 'please select regulation'],
        enum: {
            values: ['2017-2021', '2021-2025'],
            message: 'please select correct regulation',
        },
    },
    semester: {
        type: String,
        required: [true, 'please enter a semester'],
    },
});
