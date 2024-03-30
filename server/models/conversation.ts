import mongoose, { Schema } from "mongoose";
const createUserChatSchema = (chatbotId: string) => {
  const userChatSchema = new Schema(
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

  const collectionName = `UserChat_${chatbotId}`;
  return mongoose.model(collectionName, userChatSchema); 
};

module.exports = createUserChatSchema;
