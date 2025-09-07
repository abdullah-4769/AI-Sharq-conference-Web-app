'use client';


import Image from "next/image";
import Link from "next/link";
import { FaUser, FaEnvelope, FaEyeSlash, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function ProfileSetup() {
  const formData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const handleChange = () => {};

  return (
    <>
    <div className="bg-white min-h-screen w-full flex items-center justify-center relative">
    

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl px-8 py-10 z-10 flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Set Up Your Profile
        </h2>
        <p className="text-sm text-gray-500 text-center max-w-sm">
          Complete your profile to personalize your event experience and connect with others.
        </p>

        {/* Upload Icon */}
        <div className="w-24 h-24 rounded-full bg-[#F7DADC] flex items-center justify-center text-[#9B2033] text-4xl">
          <FaUser />
        </div>
        <p className="text-sm font-medium text-gray-700">Upload or Take Photo</p>

        {/* Form */}
        <div className="w-full flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg text-sm text-gray-800"
            />
          </div>

          {/* Organization/Company */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Organization/Company*</label>
            <input
              type="text"
              name="company"
              placeholder="Enter your organization"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg text-sm text-gray-800"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Contact Email*</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg text-sm text-gray-800"
            />
          </div>

          {/* Save & Continue Button */}
          <button className="w-full h-12 bg-[#9B2033] text-white text-sm font-semibold rounded-lg hover:bg-[#7c1a2a] transition">
            Save & Continue
          </button>

          {/* Skip Link */}
          <Link href="/Home">
          <p className="text-sm text-center text-gray-500 cursor-pointer hover:underline">
            Skip for now
          </p>
          </Link>
        </div>
      </div>
     
    </div>
      {/* Footer Line Image */}
      <Image
        src="/images/line.png"
        alt="Line"
        width={1440}
        height={100}
        className="w-full mt-10"
      />
     
      </>
  );
}
