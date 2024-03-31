import React, { useState } from "react";
import { cn } from "../../lib/utils";
import IosShareIcon from "@mui/icons-material/IosShare";
import AudioRecorder from "../AudioRecorder";
import { createChat } from "../../lib/page";
import { botResponse } from "../../lib/page";
import { useComponentStore, themeStore } from "../../state/store";
import { v4 as uuidv4 } from "uuid";
export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const [inputValue, setInputValue] = useState("");
  const { chats, addComponent } = useComponentStore();
  const { theme } = themeStore();

  const [selected, setSelected] = useState(1);
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
      console.log("pressed");
      const botResponseData = await botResponse(inputValue);
      console.log(botResponseData);
      const userData = {
        userId: uuidv4(),
        chatbotId: uuidv4(),
        languageModel: "gpt-1.0",
        messages: [
          {
            author: "ConvoGPT",
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

  const handleCellClick = (index) => {
    setSelected(index);
    if (index === 0) {
      setInputValue("i want to know about this medicine");
    }
    if (index === 1) {
      setInputValue("I am feeling unwell");
    }
    if (index === 2) {
      setInputValue("I need emergency help");
    }
  };

  return (
    <div className="flex items-center flex-col bg-transparent">
      <div className="grid grid-cols-3 gap-8 bg-transparent">
        {["Medicine information", "Symptoms analysis", "Emergency aid"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleCellClick(index)}
              className={`p-2 border border-highlight-1 cursor-pointer rounded-lg text-center ${
                selected === index ? "bg-highlight-1" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <div className="flex items-center ">
        <div
          ref={ref}
          className={cn(
            "w-[60vw] bg-accent-1 flex justify-between h-12 rounded-lg p-2 text-black font-medium text-sm m-4 items-center gap-0 ",
            className
          )}
        >
          <input
            className="w-[90%] h-full bg-transparent outline-none px-6 focus:ring-1 ring-transparent focus:ring-[black] rounded-lg "
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
        {theme && (
          <div
            // className={`bg-highlight-${theme} flex items-center cursor-pointer px-6 h-12 rounded-lg`}
            className={`bg-highlight-1  flex items-center cursor-pointer px-6 h-12 rounded-lg`}
            onClick={() => {
              postDataToAPI();
              getbotResponse();
            }}
          >
            {" "}
            Ask <IosShareIcon className="mb-1 ml-2" />
          </div>
        )}
      </div>
    </div>
  );
});
