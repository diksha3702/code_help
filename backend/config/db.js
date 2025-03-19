import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (error) 
    {
        console.log("DB connection failed", error.message);
    }

}

export default connectDB;