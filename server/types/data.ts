export interface Data {
    userId: string;
    chatbotId: string;
    languageModel: 'gpt-3.5' | 'gpt-4' | 'custom';
    messages: {
      author: 'user' | 'chatbot';
      text: string;
      timestamp: Date;
    }[];
    createdAt: Date;
    updatedAt: Date;
  }