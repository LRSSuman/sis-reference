import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
    registerNo: { type: String, required: true },
    regulation: { type: String, required: true }, // Example: 'R2021'
    semester: { type: Number, required: true }, // Example: 1, 2, 3...
    subjects: [
        {
            subject: { type: String, required: true }, // Subject Name
            code: { type: String, required: true }, // Subject Code
            assignments: [
                {
                    assignmentNumber: { type: Number, required: true }, // 1, 2, 3
                    status: { type: String, enum: ['Pending', 'Submitted', 'Graded'], required: true },
                    mark: { type: Number, min: 0, max: 100 },
                },
            ],
        },
    ],
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
export default Assignment;
