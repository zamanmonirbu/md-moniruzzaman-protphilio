import React from 'react';
import imageUrl from '../images/flow.jpg';

const FlowLess = () => {
  return (
    <div className="mx-12 md:flex pt-72 mb-28">
      <div className="text-left px-2 md:px-24 md:w-1/2 mb-16">
        <h1 className='text-4xl font-mono font-extrabold text-blue-900'>Flawless User Experience.</h1>
       <div >
       <span className='text-lg font-bold'>Let's keep it Purpose-driven, Heart-centered & User-focused.</span>
       <span className='text-gray-500'>   — I take ownership responsibilities & make the best of the situation.</span>
       </div>
      </div>
      <div className="sm:ml-[15%]">
        <img src={imageUrl} alt="Images" className="w-72 sm:w-96 rounded-lg initial-rotation" />
      </div>
    </div>
  );
};

export default FlowLess;
