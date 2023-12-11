import React from 'react';
import sent from '../../images/sent.png'
const PopupComponent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-end bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-[35%] h-[80%] relative">
        {/* Close button in the top-left */}
        <button
          className=" text-black py-2 px-4 rounded-full font-bold text-md absolute top-2 left-2"
          onClick={onClose}
        >
          Close
        </button>

        {/* Emoji and Greetings */}
        <div className="text-left pt-10">
        {/* <span role="img" aria-label="wave emoji" className="text-xl pr-4  ">
            😎
          </span> */}
          <p className="text-md mt-2 bg-gray-200 p-4 rounded-xl">Hi! This is kalu miah. I'm excited to talk with you. However, I'm just in alpha stage now. Zaman will upgrade me soon. I'll be more intelligent then 😊</p>
          
        </div>

        {/* Input field and send button */}
        <div className="flex items-center mt-52">
          <input
            type="text"
            placeholder="Type your message..."
            className="border border-blue-300 rounded-full px-3 py-2 flex-grow mr-2"
          />
          <button className="bg-blue-300 text-white py-2 px-4 rounded-full font-bold text-md">
            <img src={sent} className="h-6 w-6" alt="sent" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
