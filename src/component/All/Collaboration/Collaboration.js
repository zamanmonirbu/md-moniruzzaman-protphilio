import React from 'react';
import imageUrl from '../../images/something1.png';
import './Collaboration.css'; // Import your CSS file

const Collaboration = () => {
  return (
    <div className="flex mt-28 mb-28">
      <div className=" pl-32 pt-12 text-left max-w-2xl">
        <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Seamless Collaboration.</h1>
       <p className='text-gray'> <span className='text-lg font-bold'>From backend to frontend, open source to proprietary, startup to enterprise</span> — I can be & want to be the one who brings values, takes ownership & plays nicely with the team.</p>
      </div>
      <div className="ml-40 mt-12 ">
        <img src={imageUrl} alt="Images" className="w-full h-auto initial-rotation imageStyle" />
      </div>
    </div>
  );
};

export default Collaboration;
