import React from "react";
import imageUrl from "../../images/rocket.png";
// import "./Smooth.css";

const SmoothSailing = () => {
  return (
    <div className="md:flex  px-16 pb-10">
      <div className="order-2 text-left max-w-2xl">
        <h1 className="text-4xl font-mono font-extrabold text-red-500">
          Smooth sailing.
        </h1>
        <p className="text-gray">
          {" "}
          <span className="text-lg font-bold">
            Proven technologies, modern methodologies & years of experiences
          </span>{" "}
          — All boils down to the confidence of making the imagination a
          reality, taking the hope to the top & serve the ultimate best.
        </p>
      </div>
      <div className="mt-28 ml-16 order-1">
        <img
          src={imageUrl}
          alt="Images"
          className="w-full h-auto initial-rotation2 imageStyle"
        />
      </div>
    </div>
  );
};

export default SmoothSailing;
