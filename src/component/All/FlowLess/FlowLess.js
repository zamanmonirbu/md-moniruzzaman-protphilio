import React from 'react';
import imageUrl from '../../images/tec.jpeg';
 // Import your CSS file

const FlowLess = () => {
  return (
    <div className="flex ">

      <div className=" px-16 pt-44 text-left max-w-2xl">
        <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Flawless User Experience.</h1>

       <p className='text-gray'> <span className='text-lg font-bold'>Let's keep it Purpose-driven, Heart-centered & User-focused.</span> — I take ownership responsibilties & make the best of the situation.</p>
      </div>
      <div className="flex-1 relative overflow-hidden ml-24">
        <img src={imageUrl} alt="Images" className="w-full h-auto initial-rotation" />
      </div>
    </div>
  );
};

export default FlowLess;
