import React from 'react';
import TextRotator from './TextRotator';

const SlideCart = () => {
  return (
    <div className="flex justify-center items-center mb-20 pt-36">
      <div className="w-full flex flex-col justify-center items-center sm:w-96  text-center">
        <div className="w-96 rounded-2xl  bg-gray-600 p-20 relative">
        </div>
        <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-28 z-10 p-8 flex items-center flex-col ">
         <h1 className='bg-gray-600 px-20 py-4 rounded-lg color-white'><TextRotator/></h1>
         <p className='pt-4 font-bold'>MONIRUZZAMAN</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCart;
