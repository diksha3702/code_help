import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://diksha1dcmc:g2JCmHoZEDpi45Ht@cluster0.yfca8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to Database");
    } catch (error) 
    {
        console.log("DB connection failed", error.message);
    }

}

export default connectDB;