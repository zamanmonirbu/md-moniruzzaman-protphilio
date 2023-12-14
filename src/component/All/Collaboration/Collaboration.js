import React from 'react';
import imageUrl from '../../images/one.jpg';
import './Collaboration.css'; 

const Collaboration = () => {
  return (
    <div className=" md:flex mt-28">
      <div className="text-left px-2 md:pl-24  md:w-1/2 mb-16">
        <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Seamless Collaboration.</h1>
       <div className='pr-32'>
       <span className="text-xl font-bold text-gray-800 ">From backend to frontend, open source to proprietary, startup to enterprise</span>
        <span className='text-gray-500'> — I can be & want to be the one who brings values, takes ownership & plays nicely with the team.</span>
       </div>
      </div>
      <div className="ml-20 md:ml-20 ">
        <img src={imageUrl} alt="Images" className="w-96 rounded-lg initial-rotation" />
      </div>
    </div>
  );
};

export default Collaboration;
