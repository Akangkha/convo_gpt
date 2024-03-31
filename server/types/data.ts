export interface Data {
    userId: string;
    chatbotId: string;
    languageModel: 'gpt-1.0' | 'gpt-1.1' | 'custom';
    messages: {
      author: 'user' | 'chatbot' | 'ConvoGPT';
      text: string;
      timestamp: Date;
    }[];
    createdAt: Date;
    updatedAt: Date;
  }