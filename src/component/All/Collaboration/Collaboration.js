import React from 'react';
import imageUrl from '../../images/one.jpg';
import './Collaboration.css'; // Import your CSS file

const Collaboration = () => {
  return (
    <div className="mx-auto md:flex md:justify-center mt-28 mb-28">
      <div className="text-center mx-20 md:w-1/2 md:text-left">
        <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Seamless Collaboration.</h1>
        <p className='text-gray'> <span className='text-lg font-bold'>From backend to frontend, open source to proprietary, startup to enterprise</span> — I can be & want to be the one who brings values, takes ownership & plays nicely with the team.</p>
      </div>
      <div className="ml-28 md:ml-40 mt-12 initial-rotation">
        <img src={imageUrl} alt="Images" className="imageStyle" />
      </div>
    </div>
  );
};

export default Collaboration;
