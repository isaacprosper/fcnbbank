import React from 'react';
import LoginImg from "../assets/loginimg.jpg";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="md:w-1/2 w-full h-1/2 md:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${LoginImg})`,
        }}
      ></div>

      <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Log In</h1>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 py-5">
                Enter your email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 py-3">
                Enter your password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mb-5 w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 focus:outline-none mt-5 mb-4" // Added mb-4 here
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
