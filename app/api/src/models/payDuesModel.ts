import mongoose from 'mongoose';

const duesSchema = new mongoose.Schema({
    tutionFee: {
        total: { type: Number, default: 0 },
        paid: { type: Number, default: 0 },
        pending: { type: Number, default: 0 },
    },
    busFee: {
        total: { type: Number, default: 0 },
        paid: { type: Number, default: 0 },
        pending: { type: Number, default: 0 },
        monthlyPay: { type: Number, required: [true, 'please enter bus fee for month'] },
    },
    stationary: {
        total: { type: Number, default: 0 },
        paid: { type: Number, default: 0 },
        pending: { type: Number, default: 0 },
    },
    sports_placement: {
        total: { type: Number, default: 0 },
        paid: { type: Number, default: 0 },
        pending: { type: Number, default: 0 },
    },
    apparel: {
        total: { type: Number, default: 0 },
        paid: { type: Number, default: 0 },
        pending: { type: Number, default: 0 },
    },
    examinationFee: {
        total: { type: Number, default: 0 },
        paid: { type: Number, default: 0 },
        pending: { type: Number, default: 0 },
    },
    fine: {
        total: { type: Number, default: 0 },
        paid: { type: Number, default: 0 },
        pending: { type: Number, default: 0 },
    },
    lastUpdated: { type: Date, default: Date.now },
});

const transactionHistorySchema = new mongoose.Schema({
    paymentId: { type: String, required: true },
    orderId: { type: String },
    amount: { type: Number, required: true },
    paidFor: {
        type: String,
        enum: ['tuitionFee', 'busFee', 'stationary', 'sports&placement', 'apparel', 'examinationFee', 'fine'],
    },
    method: { type: String },
    status: { type: String, enum: ['Success', 'Failed', 'Pending'], default: 'Pending' },
    receiptUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const payDuesSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'please enter a name'] },
    registerNo: { type: String, required: [true, 'please enter register no'] },
    year: { type: Number, required: [true, 'please enter year'] },
    department: { type: String, required: [true, 'please department'] },
    semester: { type: Number, required: [true, 'please enter semester'] },
    dues: duesSchema,
    refund: { type: Boolean, default: false },
    prevPending: { type: Boolean, default: false },
    totalAmount: { type: Number, default: 0 },
    paidAmount: { type: Number, default: 0 },
    pendingAmount: { type: Number, default: 0 },
    halfDue: { type: Boolean, default: false },
    transactionHistory: { type: [transactionHistorySchema], default: [] },
});
