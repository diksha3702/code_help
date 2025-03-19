import File from "../../models/file.models.js";
import room from "../../models/room.model.js";

export const addFile = async (req , res , next)=>
{
    try{

        //const roomId = String(req.params);
        const {filename , roomId  , text} = req.body;

        
        const newFile =await  File.create({
            filename,
            text,
        });

        const newRoom = await room.findByIdAndUpdate({_id:roomId},{$addToSet:{files:newFile._id}});

        res.status(200).json({success:true,message:`File Added Successfully to the ${newRoom.roomname}`});     
    } catch (error) {
        return next(error);
        
    }


}