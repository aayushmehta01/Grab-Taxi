import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-black px-4 py-4">
        <Link to="/">
        <h1 className="text-white text-2xl font-bold">Grab</h1>
        </Link>
      </nav>

      <div className="flex items-center justify-center py-8">
        <div className="bg-white py-4 rounded-lg w-[400px] px-4"> 
          <h2 className="text-2xl font-bold mb-6">What’s your email?</h2>
          <form>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Enter email"
            />
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
              type="text"
              placeholder="Enter password"
            />
            <button
              className="bg-[#111] text-white font-medium text-[16px] rounded-lg px-4 py-2 w-full text-lg hover:bg-[#333] transition-colors duration-200 cursor-pointer">
              Continue
            </button>
          </form>

          <div className="relative my-6">
            <div className="border-t border-gray-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">or</span>
            </div>
          </div>

          <div className='mt-0'>
          <Link to="/find-account">
            <button className="bg-transparent text-black flex items-center justify-center font-medium text-[16px] rounded-lg px-4 py-2 w-full text-lg hover:bg-[#e8e8e8] transition-colors duration-200 cursor-pointer">
                    Find my account
                </button>
          </Link>
          </div>

          <div className='mt-2'>
            <Link to="/captain-signup">
                <button className="bg-[#e8e8e8] flex items-center justify-center text-black font-medium text-[16px] mb-5 rounded-lg px-4 py-2 w-full text-lg hover:bg-[#f7f5f5] transition-colors duration-200 cursor-pointer">
                    Create a rider account
                </button>
            </Link>
          </div>

          <div className="relative my-6">
            <div className="border-t border-gray-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">or</span>
            </div>
          </div>

          <div className='mt-0'>
            <Link to="/login">
                <button className="bg-[#e8e8e8] flex items-center justify-center text-black font-medium text-[16px] mb-5 rounded-lg px-4 py-2 w-full text-lg hover:bg-[#f7f5f5] transition-colors duration-200 cursor-pointer">
                    Sign in to ride
                </button>
            </Link>
          </div>

          <p className="text-xs text-center text-gray-500">
            By proceeding, you consent to get calls, WhatsApp or SMS/BCS messages, including by automated means, from Grab and its affiliates to the number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;