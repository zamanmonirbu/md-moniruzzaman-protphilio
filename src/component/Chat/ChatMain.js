import React, { useState } from "react";
import lineImage from "../images/line.png";
import bot from "../images/robot-chatbot-generative-ai-png.png";
import PopupComponent from "./PopupComponent";

const ChatMain = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex items-center justify-center pb-16 relative">
      <div className="text-center">
        <img src={lineImage} alt="myBg" className="w-64 h-20 mb-4" />
        <img src={bot} alt="bot" className="h-28 w-auto ml-20 mb-8" />

        <button
          className="text-white bg-gray-600 py-2 px-6 rounded font-bold text-md relative"
          onClick={handleButtonClick}
        >
          <span className="mr-2">Chat with bot</span>{" "}
          <span className="absolute top-0 right-0 mt-3 ml-1">
            <span className="relative flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
            </span>
          </span>
        </button>

        {showPopup && <PopupComponent onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default ChatMain;
