import React, { useState } from "react";
import lineImage from "../../images/line.png";
import PopupComponent from "./PopupComponent";
import './WaterDropButton.css';

const ChatMain = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <img src={lineImage} alt="myBg" className="w-64 h-20 mb-4" />
        <button
          className="bg-red-400 text-white py-1 px-6 rounded font-bold text-md water-drop-button"
          onClick={handleButtonClick}
        >
          Chat with bot 🤖
         
        </button>

        {showPopup && <PopupComponent onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default ChatMain;
