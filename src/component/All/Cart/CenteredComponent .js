import React from 'react';

const CenteredComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-28">
      {/* Your main content goes here */}
      <div className="w-1/2 bg-gray-300 p-4 rounded-lg">
        {/* Nested div centered within the main div */}
        <div className="w-1/2 h-20 bg-blue-500 rounded-md flex items-center justify-center">
          {/* Content inside the nested div */}
          <p className="text-white font-bold">Centered Content</p>
        </div>
      </div>
    </div>
  );
};

export default CenteredComponent;
