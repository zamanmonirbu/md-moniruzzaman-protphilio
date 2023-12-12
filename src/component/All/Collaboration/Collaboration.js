import React from 'react';
import imageUrl from '../../images/tec.jpeg';
import './Collaboration.css'; // Import your CSS file

const Collaboration = () => {
  return (
    <div className="flex">

      <div className=" px-16 pt-44 text-left max-w-2xl">
        <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Seamless Collaboration.</h1>

       <p className='text-gray'> <span className='text-lg font-bold'>From backend to frontend, opensource to proprietary, startup to enterprise</span> — I can be & want to be the one who brings values, takes ownership & plays nicely with the team.</p>
      </div>
      <div className="flex-1 relative overflow-hidden ml-24">
        <img src={imageUrl} alt="Images" className="w-full h-auto initial-rotation " />
      </div>
    </div>
  );
};

export default Collaboration;
