import React from "react";
import TextRotator from "./TextRotator";

const SlideCart = () => {
  return (
    <div class="flex flex-col items-center justify-center pt-28 mb-28">
      <div class="relative w-[60%] h-52  md:w-[30%] md:h-72 bg-white shadow-2xl rounded-xl mt-2">
        <div className="bg-gray-600 rounded-lg text-center m-auto w-32 h-10 mt-32 pt-2  font-bold text-white">
          <TextRotator />
          <div className="text-black mt-6 ">MONIRUZZAMAN</div>
        </div>
        <div className="absolute flex items-center justify-center w-20 h-12 text-sm font-medium italic bg-white border rounded-lg shadow-md -top-8 -right-14">
          <span className="text-blue-500">Node</span>
          <span className="text-emerald-600">.js</span>
        </div>
        <div className="absolute flex items-center justify-center w-20 h-12 text-sm font-medium italic bg-white border rounded-lg shadow-md -bottom-8 -left-12">
          <span className="text-orange-500">React</span>
          <span className="text-red-400">.js</span>
        </div>

        <div className="absolute flex items-center justify-center w-12 h-12 transform border-b border-r border-gray-500 rounded-full shadow-md  -bottom-8 -right-8">
          <div class="flex items-center justify-center w-10 h-10 text-sm italic text-white transform rounded-full bg-blue-300">
            TS
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCart;
