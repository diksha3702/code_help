import express from "express";
const router = express.Router();
import { AddNotification } from "../controllers/notify.controllers.js";



router.post("/add-notification", AddNotification);

export default router;
