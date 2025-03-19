import room from "../../models/room.model.js";
import User from "../../models/user.models.js";

export const addRoom = async (req, res, next) => {
  try {
    const { roomname } = req.params;
    const  id  = String(req.user._id);
    const  username  = (req.user.username);
    const newRoom = await room.create({
      roomname,
      ownerdetails: { ownerId: id,ownerName: username },
      members: [id],
      files: [],
    });

    await User.findByIdAndUpdate({_id: id},{$addToSet:{rooms:newRoom._id}});
    res
      .status(200)
      .json({ success: true, message: "Room created successfully" });
  } catch (error) {
    return next(error);
  }
};

export const addMember = async (req, res, next) => 
{
    try 
    {
        const {added_id} = (req.body);
        const {roomId} = (req.params);
        const currRoom = await room.findByIdAndUpdate({_id: roomId},{$addToSet :{members: added_id}});

        // add the room to the added_id

        await User.findByIdAndUpdate({_id:added_id},{$addToSet:{rooms:(currRoom._id)}});

        res.status(200).json({success:true , message:`Member added successfully to the room ${currRoom.roomname}`});
    } catch (error) {

        return next(error);
        
    }
};
