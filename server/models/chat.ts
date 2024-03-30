import mongoose, { Schema } from "mongoose";
import { Data } from "../types/data";

const userChatSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      ref: "User",
    },
    chatbotId: {
      type: String,
      required: true,
      ref: "Chatbot",
    },
    languageModel: {
      type: String,
      required: true,
      enum: ["gpt-1.0", "gpt-1.1", "custom"],
      default: "gpt-1.0",
    },
    messages: [
      {
        author: {
          type: String,
          enum: ["user", "chatbot"],
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserChat = mongoose.model<Data>("UserChat", userChatSchema);

export default UserChat;
