import React from "react";
import imageUrl from "../../images/rocket.png";


const SmoothSailing = () => {
  return (
    <div className="md:flex mt-72">
      <div className="order-2 text-left px-2 md:px-28 md:w-1/2 mb-16">
        <h1 className="text-4xl font-mono font-extrabold text-red-500">
          Smooth sailing.
        </h1>
        <span className="text-xl font-bold text-gray-800">
            Proven technologies, modern methodologies & years of experiences
          </span>
        <span className="text-gray-500">
          — All boils down to the confidence of making the imagination a
          reality, taking the hope to the top & serve the ultimate best.
        </span>
      </div>
      <div className="ml-16 order-1 md:px-24 md:w-1/2 ">
        <img
          src={imageUrl}
          alt="Images"
          className="w-96 rounded-lg initial-rotation"
        />
      </div>
    </div>
  );
};

export default SmoothSailing;
