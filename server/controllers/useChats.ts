import { Data } from "../types/data";
import UserChat from "../models/chat";
import mongoose from "mongoose";
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
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

export const getChats = async (req: Request, res: Response) => {
  try {
    const chats = await UserChat.find();
    res.status(200).json(chats);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
export const getChat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chat = await UserChat.findById(id);
    if (!chat) return res.status(404).json({ message: "Chat not found" });
    res.status(200).json(chat);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

export const deleteChat = async (req: Request, res: Response) => {
  try {
    
    const chat = await UserChat.deleteMany({})
    if (!chat) return res.status(404).json({ message: "Chat not found" });
    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};
