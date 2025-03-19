import Notify from "../models/notify.js";

export const  AddNotification = async (req , res )=>{
    try {
        const {userId , message} = req.body;

        const newNotification =await  Notify.create({
            userId,
            message
        });
        console.log(newNotification);
        res.status(201).json({success:true,message:"Notification Send Successfully"});
        
    } catch (error) 
    {
        console.log(`Error in sending the notification ${error.message}`);
        res.status(500).json({success:false , message:error.message});
        
    }
}