import React from "react";
import "../style/chatCard.css";
const HoverCard = ({ info ,className}) => {
  return (
    <div className={`card absolute z-10 w-fit h-6 mt-2 ${className}`}>
      <div className="container-card bg-blue-box p-2 px-4">
        <p className="card-description text-sm font-thin">{info}</p>
      </div>
    </div>
  );
};

export default HoverCard;
