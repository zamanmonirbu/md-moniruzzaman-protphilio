import React from "react";
import imageUrl from "../../images/rocket.png";
import "./Smooth.css";

const SmoothSailing = () => {
  return (
    <div className="flex pt-28 px-16 pb-10">
      <div className="ml-16">
        <img
          src={imageUrl}
          alt="Images"
          className="w-full h-auto initial-rotation2 imageStyle  "
        />
      </div>
      <div className=" pl-52 text-left max-w-2xl">
        <h1 className="text-4xl font-mono font-extrabold text-emerald-500">
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
    </div>
  );
};

export default SmoothSailing;
