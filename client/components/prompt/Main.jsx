import React, { useEffect } from "react";
import { Input } from "./Input";
import ChatCard from "./ChatCard";
import { useComponentStore } from "../../state/store";
import { getChats } from "../../lib/page";
const Main = () => {
  const { chats, addComponent } = useComponentStore();
  var user = "User";
  return (
    <div className="flex flex-col items-center h-[100vh] w-full overflow-scroll ">
      <div className="relative h-full w-[60%] flex flex-col text-white m-4 mt-24 overflow-scroll">
        {chats.length > 0 ? (
          chats.map((chat, index) => (
            <ChatCard key={index} chat={chat} index={index} />
          ))
        ) : (
          <div className="h-full w-full  flex flex-col items-center justify-center">
            <div className="flex justify-center items-center  flex-col      mbXSmall:flex-row">
              <img src="/icons/logo.png" className="h-16 w-16" alt="logo" />
              <p className="font-bold text-accent-1      mbXSmall:text-4xl mbMini:text-3xl sm:text-6xl">
                CONVOGPT
              </p>
            </div>
            <p className="text-center mt-4">Hello {user}!</p>
            <p className="text-center mt-4 text-sm mb-4 mbMedSmall:text-base">
              Start a conversation with the AIDoc regarding your medical aid by
              typing in the input box below.
            </p>
          </div>
        )}
      </div>
      <Input />
    </div>
  );
};

export default Main;
