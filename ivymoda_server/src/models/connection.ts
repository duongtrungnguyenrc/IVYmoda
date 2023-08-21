import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.DATABASE_CONNECTION_STRING || "";

const createConnection = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to MongoDB");
        return mongoose;
    } catch (error) {
      return error;
    }
}
export default createConnection;
