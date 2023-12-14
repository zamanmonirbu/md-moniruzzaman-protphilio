import React from 'react';
import imageUrl from '../../images/flow.jpg';
 // Import your CSS file

const FlowLess = () => {
  return (
    <div className="md:flex pt-28 mb-28">
      <div className=" pl-32 pt-12 text-left max-w-2xl">
        <h1 className='text-4xl font-mono font-extrabold text-blue-900'>Flawless User Experience.</h1>
       <p className='text-gray'> <span className='text-lg font-bold'>Let's keep it Purpose-driven, Heart-centered & User-focused.</span>  — I take ownership responsibilities & make the best of the situation.</p>
      </div>
      <div className="ml-16 mt-28 ">
        <img src={imageUrl} alt="Images" className=" initial-rotation w-full h-auto  imageStyle" />
      </div>
    </div>
  );
};

export default FlowLess;
