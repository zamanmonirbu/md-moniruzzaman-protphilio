import React from 'react';
import TextRotator from './TextRotator';

const SlideCart = () => {
  return (
   <div class="flex justify-center items-center h-screen">
     <div class="relative w-[30%] h-[30%] bg-white shadow-lg">
     <div class="absolute w-20 h-12 shadow-2xl rounded-sm -top-8 -left-12 pt-3 bg-gray-500 text-white">NodeJS</div>

  <div class="absolute w-8 h-8 bg-black rounded-full -top-2 -right-2"></div>
  <div class="absolute w-20 h-12  shadow-2xl rounded-sm -bottom-8 -left-12 pt-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text">hh</div>
  <div class="absolute w-8 h-8 bg-black rounded-full -bottom-2 -right-2"></div>
  <span class="bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text">Your Text Here</span>

</div>
   </div>
    // <div className="flex justify-center items-center mb-20 pt-36">
    //   <div className="w-full flex flex-col justify-center items-center sm:w-96  text-center">
    //     <div className="w-96 rounded-2xl  bg-gray-600 p-20 relative">
    //     </div>
    //     <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-28 z-10 p-8 flex items-center flex-col ">
    //      <h1 className='bg-gray-600 px-20 py-4 rounded-lg color-white'><TextRotator/></h1>
    //      <p className='pt-4 font-bold'>MONIRUZZAMAN</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SlideCart;
