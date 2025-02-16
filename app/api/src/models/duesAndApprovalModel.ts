import mongoose from 'mongoose';

const approvalSchema = new mongoose.Schema({
    accountant: { type: Boolean, default: false },
    librarian: { type: Boolean, default: false },
    head_of_department: { type: Boolean, default: false },
    administrative_officer: { type: Boolean, default: false },
    principle: { type: Boolean, default: false },
});

const duesAndApprovalSchema = new mongoose.Schema({
    name: String,
    degree: String,
    year: Number,
    semester: Number,
    registerNo: Number,
    branch: String,
    duesCleared: String,
    pending: Number,
    approvals: approvalSchema,
});
