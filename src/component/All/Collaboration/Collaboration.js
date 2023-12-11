import React from 'react';
import imageUrl from '../../images/tec.jpeg';
import './Collaboration.css'; // Import your CSS file

const Collaboration = () => {
  return (
    <div className="flex">
      {/* Left column with text */}
      <div className="flex-1 p-24">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
      </div>

      {/* Right column with image and gray shadow */}
      <div className="flex-1 relative overflow-hidden ml-24">
        <img src={imageUrl} alt="Images" className="w-full h-auto initial-rotation shadow-2xl p-24" />
      </div>
    </div>
  );
};

export default Collaboration;
