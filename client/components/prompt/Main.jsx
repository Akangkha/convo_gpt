import React from "react";
import { Input } from "./Input";
import ChatCard from "./ChatCard";
const Main = () => {
  return (
    <div className="flex flex-col items-center  h-[100vh] w-full overflow-scroll ">
      <div className=" relative h-full w-[60%] flex flex-col  text-white m-4 mt-24 overflow-scroll">
       <ChatCard alignment="left"/>
       <ChatCard alignment="right"/>
       <ChatCard alignment="left"/>
        <ChatCard alignment="right"/>
        <ChatCard alignment="left"/>
        <ChatCard alignment="right"/>
      </div>
      <Input />
    </div>
  );
};

export default Main;
