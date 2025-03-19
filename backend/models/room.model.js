import mongoose from "mongoose";


const roomSchema = new mongoose.Schema(
{
    roomname:
    {
        type:String,
        required :[true ,"Roomname is Required"],
        unique:true,
    },
    ownerdetails:
    {
        ownerId:{ type: String},
        ownerName:{type:String},
    },
    members:[],
    files:[]

});





const room = mongoose.model("room",roomSchema);
export default room;


