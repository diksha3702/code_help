import express from 'express';
import { addFriend , acceptFriend , declineFriend , removeFriend } from '../controllers/friends/friend.contollers.js';
const router = express.Router();

router.put("/addFriend/:id",addFriend);
router.put("/acceptFriend/:id",acceptFriend);
router.put("/declineFriend/:id",declineFriend);
router.put("/removeFriend/:id",removeFriend);
export default router;  