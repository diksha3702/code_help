import mongoose from "mongoose";


const newFile = new mongoose.Schema({
    filename:{
        type:String,
        required:[true,"Filename is Required"],
        unique: true,   
    },

    text:{
        type:String,
    },

});

const File = mongoose.model("File",newFile);
export default File;