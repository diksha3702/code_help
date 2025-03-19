import express from 'express';
import { addMember , addRoom } from '../controllers/room/room.controllers.js';
import { addFile } from '../controllers/files/files.contollers.js';
const router = express.Router();

router.post("/addRoom/:roomname",addRoom);
router.put("/addMember/:roomId",addMember);


// add file to room 

router.post("/addFile",addFile);

export default router;