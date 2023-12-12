import React, { useState } from "react";
import lineImage from "../../images/line.png";
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
    <div className="flex items-center justify-center pb-16">
      <div className="text-center">
        <img src={lineImage} alt="myBg" className="w-64 h-20 mb-4" />
        <button
          className="text-white bg-gray-600 py-2 px-6 rounded font-bold text-md "
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
