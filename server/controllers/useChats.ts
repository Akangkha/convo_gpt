import { Data } from "../types/data";
import UserChat from "../models/chat";
import { Request, Response } from "express";
export const createChat = async (req: Request, res: Response) => {
  try {
    const { userId, chatbotId, languageModel, messages }: Data = req.body;
    const chat = new UserChat({
      userId,
      chatbotId,
      languageModel,
      messages,
    });
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChats = async (req: Request, res: Response) => {
  try {
    const chats = await UserChat.find();
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getChat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chat = await UserChat.findById(id);
    if (!chat) return res.status(404).json({ message: "Chat not found" });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteChat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chat = await UserChat.findByIdAndDelete(id);
    if (!chat) return res.status(404).json({ message: "Chat not found" });
    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
