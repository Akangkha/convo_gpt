const apiUrl = import.meta.env.VITE_APP_API_URL;
console.log(apiUrl);
export const getChats = async () => {
    try {
      const response = await fetch(`${apiUrl}/chat`);
      if (!response.ok) {
        throw new Error('Failed to fetch chats');
      }
    
      return response.json();
    } catch (error) {
      console.error('Error fetching chats:', error.message);
      throw error;
    }
  };
  

export const getChat = async (id) => {
  const response = await fetch(`${apiUrl}/chat/${id}`);
  return response.json();
};

export const createChat = async (chatData) => {
  const response = await fetch(`${apiUrl}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chatData),
  });
  return response.json();
};

export const deleteChat = async (id) => {
  const response = await fetch(`${apiUrl}/chat/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
