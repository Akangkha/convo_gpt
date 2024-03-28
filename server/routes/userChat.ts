import express from "express";
import {
  createChat,
  getChats,
  deleteChat,
} from "../controllers/useChats";

const router = express.Router();
router.get("/", getChats);
router.post("/", createChat);
router.delete("/", deleteChat);
export default router;
