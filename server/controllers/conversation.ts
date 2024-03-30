
import { Request, Response } from "express";
const createUserChatSchema = require('./models/userChatSchema');
export const createConversation = async (req: Request, res: Response) => {
  const { chatbotId } = req.body;
  try {
    const conversation = new createUserChatSchema(chatbotId);

    res.status(201).json(conversation);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
