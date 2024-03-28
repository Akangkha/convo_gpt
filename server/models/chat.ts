import mongoose, { Schema } from 'mongoose';
import { Data } from "../types/data"

const userChatSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  chatbotId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Chatbot',
  },
  languageModel: {
    type: String,
    required: true,
    enum: ['gpt-3.5', 'gpt-4', 'custom'],
  },
  messages: [
    {
      author: {
        type: String,
        enum: ['user', 'chatbot'],
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
}, {
  timestamps: true,
});

const UserChat = mongoose.model<Data>('UserChat', userChatSchema);

export default UserChat;