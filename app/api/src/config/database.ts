import mongoose, { connect } from 'mongoose';

export const connectDatabase = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DB_LOCAL_URI);
        console.log(`MongoDB is connected to the host ${connection.host}`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error connecting to MongoDB ${err.message}`);
        } else {
            console.error(`An unknown error occured while connecting to MongoDB`);
        }
    }
};
