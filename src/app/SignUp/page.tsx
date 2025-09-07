'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageComponent from '../components/Images';
import { FaUser, FaEnvelope, FaEyeSlash, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex items-center justify-center gap-20 p-10">
      {/* Left side - Image */}
      <ImageComponent />
      
      {/* Right side - Form Container */} 
      <div className="w-[525px] h-[926px] bg-white border border-gray-300 rounded-2xl shadow-lg p-10 flex gap-10">
        <div className="w-[525px] flex flex-col items-center gap-10">
          {/* Logo */}
          <Image
            src="/images/logo2.png"
            alt="Al Sharq Logo"
            width={157}
            height={47}
            className="w-[157px] h-[47px]"
          />

          {/* Title */}
          <h1 className="text-2xl font-medium text-gray-800 text-center leading-tight">
            Sign Up to <br/> <strong className='text-[#9B2033]'>AL SHARQ CONFERENCE</strong> 
          </h1>

          {/* Form */}
          <div className="w-full max-w-[405px] flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-gray-700">Full Name*</label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-[53px] border border-gray-300 rounded-lg px-5 py-4 text-base text-gray-400 focus:outline-none focus:border-gray-500"
                />
                <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-gray-700">Email Address*</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[53px] border border-gray-300 rounded-lg px-5 py-4 text-base text-gray-400 focus:outline-none focus:border-gray-500"
                />
                <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-gray-700">Password*</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-[53px] border border-gray-300 rounded-lg px-5 py-4 text-base text-gray-400 focus:outline-none focus:border-gray-500"
                />
                <FaEyeSlash className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-3">
              <label className="text-base font-normal text-gray-700">Confirm Password*</label>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Your Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full h-[53px] border border-gray-300 rounded-lg px-5 py-4 text-base text-gray-400 focus:outline-none focus:border-gray-500"
                />
                <FaEyeSlash className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Create Account Button */}
            <button className="w-full h-[54px] bg-red-700 text-white text-base font-medium rounded-lg hover:bg-red-800 transition">
              Create Account
            </button>

            {/* Or */}
            <div className="flex items-center gap-4">
              <hr className="flex-1 border-gray-300 opacity-20" />
              <span className="text-sm text-gray-500">Or</span>
              <hr className="flex-1 border-gray-300 opacity-20" />
            </div>

            {/* Social Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 h-[59px] border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <FaGoogle className="w-6 h-6" />
                <span className="text-base text-gray-800">Google</span>
              </button>
              <button className="flex-1 h-[59px] border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <FaFacebookF className="w-6 h-6" />
                <span className="text-base text-gray-800">Facebook</span>
              </button>
              <button className="flex-1 h-[59px] border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <FaApple className="w-6 h-6" />
                <span className="text-base text-gray-800">Apple</span>
              </button>
            </div>

            {/* Sign In Link */}
            <p className="text-base text-gray-800 text-center">
              Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
       <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[1010px] " />
    </div>
  );
}
