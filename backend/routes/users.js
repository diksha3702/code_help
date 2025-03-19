import express from "express";
const router = express.Router();
import {updateDetails, userDetails } from "../controllers/users/users.js";



router.get("/user-details", userDetails);
router.put("/update-details",updateDetails);
export default router;
