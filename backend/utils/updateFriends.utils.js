import User from "../models/user.models.js";

export const updateUserFriends = async (userId, method, updateArray, id) => {
  try {
    console.log(updateArray);
    if (method == "add") 
    {
      const new_user = await User.findByIdAndUpdate(
        { _id: userId },
        { $addToSet: { [updateArray]: id } },
        {new:true}
      );
      return new_user;
    }
    else if (method == "pull"){
        await User.updateOne(
      { _id: userId },
      { $pull: {[updateArray] : id } }
    );

    }
  } catch (error) {}
};
