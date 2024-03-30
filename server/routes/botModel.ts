import express from "express";
import { botResponse } from "../controllers/botModel";
const router = express.Router();
router.get("/", botResponse);

export default router;
