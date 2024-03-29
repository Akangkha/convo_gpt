import React from "react";
import SendIcon from "@mui/icons-material/Send";
const Topbar = () => {
  return (
    <div className="w-screen h-16 text-white bg-accent-1 flex justify-between items-center px-12 font-extrabold">
      ConvoGPT
      <div className="h-[32px] w-12 border rounded-full flex justify-center items-center ">
        <SendIcon className="m-auto" />
      </div>
    </div>
  );
};

export default Topbar;
