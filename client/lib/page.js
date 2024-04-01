const apiUrl = import.meta.env.VITE_APP_API_URL;
import toast from "react-hot-toast";
export const getChats = async () => {
  try {
    const response = await fetch(`${apiUrl}/chat`);
    if (!response.ok) {
      throw new Error("Failed to fetch chats");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching chats:", error.message);
    throw error;
  }
};

export const getChat = async (id) => {
  const response = await fetch(`${apiUrl}/chat/${id}`);
  return response.json();
};

export const createChat = async (chatData) => {
  return fetch(`${apiUrl}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chatData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create chat");
    }
    return response.json();
  });
};

export const deleteChat = async (id) => {
  const response = await fetch(`${apiUrl}/chat/${id}`, {
    method: "DELETE",
  });

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Invalid server response: Not JSON");
  }

  if (!response.ok) {
    throw new Error("Failed to delete chat");
  }

  return response.json();
};

export const deleteChats = async () => {
  const response = await fetch(`${apiUrl}/chat`, {
    method: "DELETE",
  });

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Invalid server response: Not JSON");
  }

  if (!response.ok) {
    throw new Error("Failed to delete chats");
  }

  return response.json();
};

export const botResponse = async (msg) => {
  try {
    toast.promise(fetch(`${apiUrl}/bot?msg=${encodeURIComponent(msg)}`), {
      loading: 'Loading...',
      success: 'Response fetched successfully',
      error: 'Error when fetching',
    });
    
    const response = await fetch(`${apiUrl}/bot?msg=${encodeURIComponent(msg)}`);

    if (!response.ok) {
      throw new Error("Failed to fetch response");
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("Error fetching bot response:", error.message);
    throw error;
  }
};

