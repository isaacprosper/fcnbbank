
import React, { useRef, useState } from 'react';
import { LuScanFace } from "react-icons/lu";

const LoginScreen = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const pinRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {  // Allow only one digit
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < pinRefs.length - 1) {
        pinRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      pinRefs[index - 1].current.focus();
    }
  };

  const handleFaceID = () => {
    alert("Face ID authentication successful!");
  };

  return (
    <div className="min-h-screen bg-purple-900  flex flex-col items-center">
      <div className="w-full px-4 my-4 text-white flex items-center  relative">
        <button className="text-2xl border-white border pb-1  px-2 rounded-md ">&#8592;</button>
      </div>

      <div className="w-full bg-purple-900 text-white py-4 flex justify-between px-2">
        <div className="flex-none pl-4">
          <h2 className="text-sm font-medium text-gray-400 mb-2">Bank at your finger tips</h2>
          <h3 className="text-lg font-semibold">Login Method</h3>
        </div>
        <div className="border-white border-2 items-center p-1 px-3 rounded-md">
          <h1 className="text-xs font-bold text-white mb-2">FNBC</h1>
          <div className="h-1 bg-yellow-500 mx-auto"></div>
          <div className="h-1 bg-yellow-500 mx-auto mt-1"></div>
        </div>
      </div>

      <div className="w-full bg-white rounded-t-3xl mt-4">
        <div className="flex justify-between border-b border-gray-200">
          <button className="w-1/2 py-4 text-center text-purple-900 font-semibold border-b-2 border-purple-900">
            Quick Access MPIN
          </button>
          <button className="w-1/2 py-4 text-center text-gray-500">
            Customer ID
          </button>
        </div>
        
        <div className="px-6 py-8">
          <div className="flex justify-center gap-3 mb-6">
            {pin.map((digit, index) => (
              <input
                key={index}
                ref={pinRefs[index]}
                type="password"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-2xl border hover:border-purple-900 border-gray-300 rounded-lg focus:outline-none"
              />
            ))}
          </div>
          <p className="text-purple-600 text-center mb-4 font-bold text-sm">Forgot MPIN?</p>
        
          <button className="w-full bg-purple-900 text-white py-3 rounded-lg font-semibold mb-4">Login</button>
          
          <button 
            onClick={handleFaceID}
            className="w-full border font-bold text-sm border-gray-300 py-3 rounded-lg flex items-center justify-center mb-10 text-gray-600"
          >
            <LuScanFace className=' pr-2 font-bold text-3xl' />Login with Face ID
          </button>
          
          <p className="text-center text-purple-900 underline">Create an account?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
