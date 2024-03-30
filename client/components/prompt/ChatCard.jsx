import React from "react";
import "../../style/chatCard.css";
const ChatCard = ({ alignment, writer }) => {
  return (
    <div
      className={`card mb-4 ${
        alignment === "left"
          ? "self-start"
          : alignment === "right"
          ? "self-end"
          : ""
      }`}
    >
      <div className="container-card bg-blue-box px-10 py-5 ">
        <div className="card-title flex  items-center gap-3 w-full ">
          <img
            src="/icons/logo.png"
            alt="profile_pic"
            width="30px"
            height="30px"
            
          />
          <div className="mb-8">Get up to 11x Leverage</div>
        </div>

        <p className="card-description">
          Hubble’s capital-efficient 110% collateral ratio lets users leverage
          up to 11x on their deposits.
        </p>
      </div>
    </div>
  );
};

export default ChatCard;
