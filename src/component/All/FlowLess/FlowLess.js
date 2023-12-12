import React from 'react';
import imageUrl from '../../images/flow.jpg';
 // Import your CSS file

const FlowLess = () => {
  return (
    <div className="flex pt-28 mb-28">
      <div className=" pl-32 pt-12 text-left max-w-2xl">
        <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Flawless User Experience.</h1>
       <p className='text-gray'> <span className='text-lg font-bold'>Let's keep it Purpose-driven, Heart-centered & User-focused.</span>  — I take ownership responsibilities & make the best of the situation.</p>
      </div>
      <div className="ml-40 mt-12 ">
        <img src={imageUrl} alt="Images" className="w-full h-auto initial-rotation imageStyle" />
      </div>
    </div>
  );
};

export default FlowLess;
