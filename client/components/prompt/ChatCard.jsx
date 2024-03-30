import React from "react";
import "../../style/chatCard.css";

const ChatCard = ({ chat }) => {
  console.log("Chat Cardkkk:", chat.message.messages);
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
          <div className="container-card bg-blue-box px-10 py-5 ">
            <div className="card-title flex items-center gap-3 w-full ">
              <img
                src="/icons/logo.png"
                alt="profile_pic"
                width="30px"
                height="30px"
              />
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
