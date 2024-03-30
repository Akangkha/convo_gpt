import React, { useState } from "react";
import { cn } from "../../lib/utils";
import IosShareIcon from "@mui/icons-material/IosShare";
import AudioRecorder from "../AudioRecorder";
import { createChat } from "../../lib/page";
import { botResponse } from "../../lib/page";
import useComponentStore from "../../state/store";
import { v4 as uuidv4 } from "uuid";
export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const [inputValue, setInputValue] = useState("");
  const { chats, addComponent } = useComponentStore();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      postDataToAPI();
      getbotResponse();
    }
  };

  const getbotResponse = async () => {
    try {
      const botResponseData = await botResponse(inputValue);
      console.log(botResponseData);
      const userData = {
        userId: uuidv4(),
        chatbotId: uuidv4(),
        languageModel: "gpt-1.0",
        messages: [
          {
            author: "chatbot",
            text: botResponseData,
            timestamp: new Date(),
          },
        ],
      };
      addComponent(userData);
      await createChat(userData);
    } catch (error) {
      console.error(
        "Error fetching bot response and updating the same:",
        error.message
      );
    }
  };
  const postDataToAPI = async () => {
    try {
      const userData = {
        userId: uuidv4(),
        chatbotId: uuidv4(),
        languageModel: "gpt-1.0",
        messages: [
          {
            author: "user",
            text: inputValue,
            timestamp: new Date(),
          },
        ],
      };

      addComponent(userData);
      await createChat(userData);
      setInputValue("");
    } catch (error) {
      console.error("Error creating chat:", error.message);
    }
  };

  return (
    <div className="flex items-center">
    <div
      ref={ref}
      className={cn(
        "w-[60vw] bg-accent-1 flex justify-between h-12 rounded-lg p-2 text-black font-medium text-sm m-4 items-center ",
        className
      )}
      suppressHydrationWarning
    >
      <input
        className="w-[88%] h-full bg-transparent outline-none px-6 focus:ring-1 ring-transparent focus:ring-[black] rounded-lg "
        placeholder="Talk to ConvoGPT...."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
     
      <img
        src="/icons/link.png"
        // className="absolute right-4 top-3"
        alt="link button"
        width={20}
      />
      <AudioRecorder />
    </div>
    <div className="bg-highlight flex items-center px-6 h-12 rounded-lg"> Ask  <IosShareIcon onClick={postDataToAPI} /></div>
    </div>
  );
});
