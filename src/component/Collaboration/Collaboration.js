import React from "react";
import imageUrl from "../images/one.jpg";
import "./Collaboration.css";

const Collaboration = () => {
  return (
    <div className="mx-12 md:flex mt-28">
      <div className="text-justify sm:text-left px-2 md:pl-32  md:w-1/2 mb-16">
        <h1 className="text-4xl font-mono font-extrabold text-emerald-500">
          Seamless Collaboration.
        </h1>
        <span className="text-xl font-bold text-gray-800 ">
          From backend to frontend, open source to proprietary, startup to
          enterprise
        </span>
        <span className="text-gray-500">
          {" "}
          — I can be & want to be the one who brings values, takes ownership &
          plays nicely with the team.
        </span>
      </div>
      <div className="sm:ml-[15%] ">
        <img
          src={imageUrl}
          alt="Images"
          className=" w-72 sm:w-96 rounded-lg initial-rotation"
        />
      </div>
    </div>
  );
};

export default Collaboration;
