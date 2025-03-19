import { updateUserFriends } from "../../utils/updateFriends.utils.js";

export const addFriend = async (req, res, next) => {
  try {
    const userId = String(req.user._id);
    const { id } = req.params;

    await updateUserFriends(userId, "add", "sendedRequests", id);
    const send_user = await updateUserFriends(
      id,
      "add",
      "receivedRequests",
      userId
    );

    res.status(200).json({
      success: true,
      message: `Friend Request Send Successfully to ${send_user.username}`,
    });
  } catch (error) {
    return next(error);
  }
};

export const acceptFriend = async (req, res, next) => {
  try {
    const userId = String(req.user._id);
    const { id } = req.params;
    await updateUserFriends(userId, "add", "friends", id);
    await updateUserFriends(id, "add", "friends", userId);

    //deleting the request
    await updateUserFriends(userId, "pull", "receivedRequests", id);
    await updateUserFriends(id, "pull", "sendedRequests", userId);

    res
      .status(200)
      .json({ success: true, message: `Friend Request Accepted Successfully` });
  } catch (error) {
    return next(error);
  }
};

export const removeFriend = async (req, res, next) => {
  try {
    const userId = String(req.user._id);
    const { id } = req.params;
    await updateUserFriends(userId, "pull", "friends", id);
    await updateUserFriends(id, "pull", "friends", userId);

    res
      .status(200)
      .json({ success: true, message: "Friend Removed Successfully" });
  } catch (error) {
    return next(error);
  }
};

export const declineFriend = async (req, res, next) => {
  try {
    const userId = String(req.user._id);
    const { id } = req.params;

    await updateUserFriends(userId, "pull", "receivedRequests", id);
    await updateUserFriends(id, "pull", "sendedRequests", userId);

    res.status(200).json({ success: true, message: "Friend Request Declined" });
  } catch (error) {
    return next(error);
  }
};
