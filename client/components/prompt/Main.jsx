import React, { useEffect } from "react";
import { Input } from "./Input";
import ChatCard from "./ChatCard";
import useComponentStore from "../../state/store"; // Import your Zustand store here
import { getChats } from "../../lib/page";
const Main = () => {
  const chatComponent = useComponentStore((state) => state.chats);
  const addComponent = useComponentStore((state) => state.addComponent);
  const deleteComponent = useComponentStore((state) => state.deleteComponent);
  ;
  const [chats, setChats] = React.useState([]); // Initialize the chats state locally
  var user = "User";

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        // Fetch chats data (assuming getChats is defined)
        const chatsData = await getChats();
        if (isMounted) {
          console.log("Chats:", chatsData);
          
          chatsData.map((chat) => {
            const chatComponent = <ChatCard key={chat.id} chat={chat} />;
            addComponent(chatComponent);
            // addChatToState(chatComponent); 
          });
          
        }
      } catch (error) {
        console.error("Failed to fetch chats:", error.message);
      }
    }

    if (typeof window !== "undefined") {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [addComponent]);

  return (
    <div className="flex flex-col items-center h-[100vh] w-full overflow-scroll">
      <div className="relative h-full w-[60%] flex flex-col text-white m-4 mt-24 overflow-scroll">
        {chatComponent.length > 0 ? (
          chatComponent.map((chat, index) => (
            <ChatCard key={index} chat={chat} index={index} />
          ))
        ) : (
          <div className="h-full w-full  flex flex-col items-center justify-center">
            <div className="flex justify-center items-center gap-8">
              <img src="/icons/logo.png" className="h-16 w-16" alt="logo" />
              <h1 className="font-bold">CONVOGPT</h1>
            </div>
            <p className="text-center mt-4">Hello {user}!</p>
            <p className="text-center mt-4">
              Start a conversation with the AI chatbot by typing in the input
              box below.
            </p>
          </div>
        )}
      </div>
      <Input />
    </div>
  );
};

export default Main;
