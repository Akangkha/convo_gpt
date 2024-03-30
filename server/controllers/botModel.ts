import { Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const api_key: string = process.env.GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(api_key);

export const botResponse = async (req: Request, res: Response) => {
  try {
    const prompt = (req.query.msg || "Hello Gemini!").toString();

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).send(text);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
