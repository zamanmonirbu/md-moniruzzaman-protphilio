import React from 'react';
import imageUrl from '../../images/tec.jpeg';


const SmoothSailing = () => {
    return (
        <div className="flex ">
            <div className="flex-1 relative overflow-hidden ml-24">
                <img src={imageUrl} alt="Images" className="w-full h-auto initial-rotation  " />
            </div>
            <div className=" px-16 pt-44 text-left max-w-2xl">
                <h1 className='text-4xl font-mono font-extrabold text-emerald-500'>Smooth sailing.</h1>
               <p className='text-gray'> <span className='text-lg font-bold'>Proven technologies, modern methodologies & years of experiences</span> — All boils down to the confidence of making the imagination a reality, taking the hope to the top & serve the ultimate best.</p>
            </div>
        </div>
    );
};

export default SmoothSailing;
