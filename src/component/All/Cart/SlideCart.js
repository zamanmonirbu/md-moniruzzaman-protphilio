import React from 'react';
import TextRotator from './TextRotator';

const SlideCart = () => {
  return (
    <div className="flex justify-center items-center mt-20 mb-10">
      <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
        <div className="w-full rounded-2xl p-4 text-white bg-gradient-to-br from-[#6e6868] to-[#e92424] pb-32 relative">
        </div>
        <div className="text-center bg-gray-200 shadow-lg w-[80%] rounded-xl -mt-20 z-10 p-9 flex items-center flex-col ">
         <h1 className='bg-red-400 px-20 py-4 rounded-lg'><TextRotator/></h1>
         <p className='pt-4 font-bold'>MONIRUZZAMAN</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCart;
