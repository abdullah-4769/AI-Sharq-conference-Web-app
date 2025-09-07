'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageComponent from '../components/Images';
import { FaEnvelope, FaEyeSlash, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="flex gap-20 p-10 mt-10">
      {/* Left side - Image */}
      <ImageComponent />

      {/* Right side - Form Container */}
      <div className="absolute w-[450px] max-w-full h-auto left-[935px] top-[calc(50%-676px/2)] bg-white border border-gray-300 rounded-[20px] shadow-[0px_4px_110.3px_rgba(68,68,68,0.25)] p-8 flex flex-col gap-10">
        {/* Logo and Title */}
        <div className="flex flex-col items-center gap-8 w-full max-w-[358px]">
          <Image
            src="/images/logo2.png"
            alt="Al Sharq Logo"
            width={157}
            height={47}
            className="w-[157px] h-[47px]"
          />
          {/* Title */}
          <h1 className="text-2xl font-medium text-gray-800 text-center leading-tight">
            Sign In to <br/> <strong className='text-[#9B2033]'>AL SHARQ CONFERENCE</strong>
          </h1>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-6 w-full max-w-[405px]">
          {/* Email Field */}
          <div className="flex flex-col gap-3 w-full">
            <label className="text-base font-normal leading-6 text-[#262626] font-['IBM_Plex_Sans']">
              Email Address*
            </label>
            <div className="flex items-center gap-3 w-full border border-[#DEDEDE] rounded-lg px-4 py-3">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                className="text-base font-normal leading-6 text-[#616161] font-['IBM_Plex_Sans'] border-none outline-none w-full"
              />
              <FaEnvelope className="w-5 h-5 text-[#9C9C9C]" />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-3 w-full">
            <label className="text-base font-normal leading-6 text-[#262626] font-['IBM_Plex_Sans']">
              Password*
            </label>
            <div className="flex items-center gap-3 w-full border border-[#DEDEDE] rounded-lg px-4 py-3">
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleChange}
                className="text-base font-normal leading-6 text-[#616161] font-['IBM_Plex_Sans'] border-none outline-none w-full"
              />
              <FaEyeSlash className="w-5 h-5 text-[#9C9C9C]" />
            </div>
          </div>

          {/* Remember Me and Forget Password */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 bg-white border border-[#282828] rounded"
              />
              <label className="text-base font-normal leading-5 text-[#282828] font-['SF_Pro_Display']">
                Remember me
              </label>
            </div>
            <a href="#" className="text-base font-normal leading-5 text-[#9B2033] font-['SF_Pro_Display']">
              Forget Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-[#9B2033] rounded-lg text-base font-medium leading-6 text-white font-['IBM_Plex_Sans'] px-4 py-3">
            Sign In
          </button>
        </div>

        {/* Or Login With */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[405px]">
          <div className="flex items-center gap-4 w-full">
            <hr className="flex-1 border border-[#546056] opacity-20" />
            <span className="text-sm leading-5 text-[#6C7278] font-['Figtree']">
              Or
            </span>
            <hr className="flex-1 border border-[#546056] opacity-20" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-2 w-full">
            <button className="flex items-center justify-center gap-2 w-1/3 border border-[#DEDEDE] rounded-lg text-base font-normal leading-6 text-[#1E1E1E] font-['IBM_Plex_Sans'] px-4 py-3">
              <FaGoogle className="w-6 h-6" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 w-1/3 border border-[#DEDEDE] rounded-lg text-base font-normal leading-6 text-[#1E1E1E] font-['IBM_Plex_Sans'] px-4 py-3">
              <FaFacebookF className="w-6 h-6" />
              Facebook
            </button>
            <button className="flex items-center justify-center gap-2 w-1/3 border border-[#DEDEDE] rounded-lg text-base font-normal leading-6 text-[#1E1E1E] font-['IBM_Plex_Sans'] px-4 py-3">
              <FaApple className="w-6 h-6" />
              Apple
            </button>
          </div>
        </div>

        {/* Already have an account */}
        <p className="text-base font-normal leading-8 text-center text-[#282828] font-['IBM_Plex_Sans']">
          Already have an account? Sign In
        </p>
      </div>
      <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[1010px]" />
    </div>
  );
}
