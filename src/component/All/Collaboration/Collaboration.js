import React from 'react';
import imageUrl from '../../images/one.jpg';
import './Collaboration.css'; // Import your CSS file

const Collaboration = () => {
  return (
    <div className=" md:flex md:justify-center mt-28 mb-28">
      <div className="text-center mx-20 md:w-1/3 md:text-left ">
        <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Seamless Collaboration.</h1>
        <p className='text-gray-900'> <span className="text-xl font-bold text-gray-900">From backend to frontend, open source to proprietary, startup to enterprise</span> — I can be & want to be the one who brings values, takes ownership & plays nicely with the team.</p>
      </div>
      <div className="ml-20 md:ml-40 mt-12 initial-rotation imageStyle">
        <img src={imageUrl} alt="Images" className="imageStyle" />
      </div>
    </div>
  );
};

export default Collaboration;
