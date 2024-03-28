import express from "express";
import {
  createChat,
  getChats,
  deleteChat,
} from "../controllers/useChats.ts";

const router = express.Router();
router.get("/", getChats);
router.post("/:faculty", createChat);
router.put("/", deleteChat);
export default router;
