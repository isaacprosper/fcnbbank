// src/SplashScreen.jsx
import React from 'react';

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-900 relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">FNBC</h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-1"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-around text-white opacity-20">
        <div className="text-center">SAVING</div>
        <div className="text-center">INVESTMENT</div>
        {/* Add more icons or text here as needed */}
      </div>
    </div>
  );
};

export default SplashScreen;
