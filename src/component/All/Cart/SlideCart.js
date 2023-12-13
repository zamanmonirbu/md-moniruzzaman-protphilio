import React from 'react';
import TextRotator from './TextRotator';
import CenteredComponent from './CenteredComponent ';

const SlideCart = () => {
  return (
    // <CenteredComponent/>

    // <div className="flex flex-col items-center justify-center pt-28">
    //   {/* Your main content goes here */}
    //   {/* <div className="w-1/2 bg-gray-300 p-4 rounded-lg"> */}
    //     {/* Nested div centered within the main div */}
    //     <div className=" h-20 bg-blue-500 rounded-md flex items-center justify-center">
    //       {/* Content inside the nested div */}
    //       <p className="text-white font-bold">Centered Content</p>
    //     </div>
    //   {/* </div> */}
    // </div>

    <div class="flex flex-col items-center justify-center pt-28">
      <div class="relative w-[30%] h-72 bg-white shadow-2xl rounded-xl mt-2">
        <div className='bg-gray-600 rounded-lg text-center m-auto w-12 h-12 mt-32'>
          <TextRotator />
        </div>
        <div className='absolute flex items-center justify-center w-20 h-12 text-sm font-medium italic bg-white border rounded-lg shadow-md -top-8 -right-14'>
          <span className='text-blue-500'>Node</span>
          <span className="text-emerald-600">.js</span>
        </div>
        <div className='absolute flex items-center justify-center w-20 h-12 text-sm font-medium italic bg-white border rounded-lg shadow-md -bottom-8 -left-12'>
          <span className='text-orange-500'>React</span>
          <span className="text-red-400">.js</span>
        </div>

        <div className='absolute z-20 flex items-center justify-center w-12 h-12 transform border-b border-r border-gray-500 rounded-full shadow-md  -bottom-8 -right-8'>
          <div class="flex items-center justify-center w-10 h-10 text-sm italic text-white transform rounded-full bg-blue-300" >TS</div>
        </div>



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
