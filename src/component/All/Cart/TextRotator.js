import React, { useState, useEffect } from 'react';
import './TextRotator.css'; // Import your CSS file for styling

const TextRotator = () => {
  const texts = ['monir', 'React', 'Node', 'Express', 'Mongo'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts.length]);

  return (
        <div className="animated-text text-white">
          {texts.map((text, index) => (
            <div
              key={index}
              className={`line ${index === currentTextIndex ? 'active' : ''}`}
            >
              {text}
            </div>
          ))}
        </div>      
  );
};

export default TextRotator;
