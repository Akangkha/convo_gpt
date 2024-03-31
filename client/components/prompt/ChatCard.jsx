import React from "react";
import "../../style/chatCard.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const ChatCard = ({ chat }) => {

  return (
    <>
      {chat.message.messages.map((message, index) => (
        <div
          key={index}
          className={`card mb-4 ${
            message.author === "chatbot"
              ? "self-start"
              : message.author === "user"
              ? "self-end"
              : ""
          }`}
        >
          <div className="container-card  px-5 py-5 ">
            <div className="card-title flex items-center gap-3 w-full mt-4 h-6 ">
              {(message.author=='ConvoGPT')?<img
                src="/icons/logo.png"
                alt="profile_pic"
                width="30px"
                height="30px"
              />:<AccountCircleIcon className="mb-8"/>}
              <div className="mb-8">{message.author}</div>
            </div>

            <p className="card-description">
              <span>{message.text}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatCard;
