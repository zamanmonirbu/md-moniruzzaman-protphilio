import React, { useState, useEffect } from 'react';

const TextRotator = () => {
  const texts = ['Full Stack','ON MERN','React', 'Node', 'Express', 'MongoDB'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <p>{texts[currentTextIndex]}</p>
    </div>
  );
};

export default TextRotator;
