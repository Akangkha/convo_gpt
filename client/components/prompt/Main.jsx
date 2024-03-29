import React from "react";
import { Input } from "./Input";
import "../../style/chatCard.css"
const Main = () => {
  return (
    <div className="flex flex-col items-center  h-[100vh] w-full justify-center">
      <div className="border h-full w-[60%] text-white m-4 mt-24">
        <div class="card">
          <div class="container-card bg-blue-box">
            <p class="card-title">Get up to 11x Leverage</p>
            <p class="card-description">
              Hubble’s capital-efficient 110% collateral ratio lets users
              leverage up to 11x on their deposits.
            </p>
          </div>
        </div>
      </div>
      <Input />
    </div>
  );
};

export default Main;
