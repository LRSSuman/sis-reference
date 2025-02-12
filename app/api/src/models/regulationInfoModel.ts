import mongoose from 'mongoose';

const regulationInfoSchema = new mongoose.Schema({
    regulation: { type: String, required: true, unique: true },
    semesters: [
        {
            semesterNumber: { type: Number, required: true },
            subjects: [
                {
                    name: { type: String, required: true },
                    code: { type: String, required: true, unique: true },
                },
            ],
        },
    ],
});

const RegulationInfo = mongoose.model('RegulationInfo', regulationInfoSchema);
export default RegulationInfo;
