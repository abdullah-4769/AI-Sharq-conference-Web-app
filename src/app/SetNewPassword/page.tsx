'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageComponent from '../components/Images';
import { FaEnvelope, FaEyeSlash, FaExclamationCircle, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

export default function SetNewPassword() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear errors on change
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = { newPassword: '', confirmPassword: '' };
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return !newErrors.newPassword && !newErrors.confirmPassword;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // You can add API call or navigation here
    }
  };

  return (
    <div className="flex gap-20 p-10 mt-10">
      {/* Need help? Contact Support */}
      <span className="absolute w-[191px] h-[11px] left-[calc(50%-191px/2+0.5px)] top-[916px] font-['SF_Pro_Display'] font-normal text-[16px] leading-[30px] text-center text-[#282828]">
        Need help? <strong className='text-red-700'>Contact Support</strong>
      </span>
      {/* Left side - Image */}
      <ImageComponent />

      {/* Right side - Form Container */}
    <div className="box-border flex flex-col items-center py-[42px] px-[60px] gap-[42px] absolute w-[525px] h-[615px] left-[835px] top-[calc(50%-615px/2+0.5px)] bg-white border border-gray-300 shadow-[0px_4px_110.3px_rgba(68,68,68,0.25)] rounded-[20px]">
      {/* Frame 1000004789 */}
      <div className="flex flex-col items-center p-0 gap-[30px] w-[358px] h-[94px]">
        {/* al sharq guidelines-3 copy */}
        <Image
          src="/images/logo2.png"
          alt="Al Sharq Logo"
          width={157}
          height={47}
        />
        {/* Setup New Password */}
        <h1 className="w-[229px] h-[17px] font-['IBM_Plex_Sans'] font-medium text-[24px] leading-[24px] text-center tracking-[-0.01em] text-[#282828]">
          Setup New Password
        </h1>
      </div>

      {/* Choose a strong password... */}
      <p className="w-[381px] h-[35px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[150%] text-center text-[#282828]">
        Choose a strong password to secure your account. Make sure it's something you'll remember.
      </p>

      {/* Input */}
      <div className="flex flex-col justify-center items-center p-0 gap-[24px] w-[405px] h-[318px]">
        {/* New Password */}
        <div className="flex flex-col items-start p-0 gap-[12px] w-[405px] h-[76px]">
          <label className="w-[405px] h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
            New Password*
          </label>
          <div className="flex flex-row items-start p-0 gap-[6px] w-[405px] h-[53px]">
            <div className="box-border flex flex-col justify-center items-start py-[17px] px-[19px] gap-[10px] w-[405px] h-[53px] border border-[#DEDEDE] rounded-[10px]">
              <div className="flex flex-row items-center p-0 gap-[12px] w-[367px] h-[20px]">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="w-[335px] h-[5.73px] text-[#546056] border-none outline-none"
                />
                <FaEyeSlash size={20} color="#9C9C9C" />
              </div>
            </div>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="flex flex-col items-start p-0 gap-[12px] w-[405px] h-[76px]">
          <label className="w-[405px] h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
            Confirm New Password*
          </label>
          <div className="flex flex-row items-start p-0 gap-[6px] w-[405px] h-[53px]">
            <div className="box-border flex flex-col justify-center items-start py-[17px] px-[19px] gap-[10px] w-[405px] h-[53px] border border-[#DEDEDE] rounded-[10px]">
              <div className="flex flex-row items-center p-0 gap-[12px] w-[367px] h-[20px]">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  className="w-[335px] h-[5.73px] text-[#546056] border-none outline-none"
                />
                <FaEyeSlash size={20} color="#9C9C9C" />
              </div>
            </div>
          </div>
        </div>

        {/* Password requirements */}
        <div className="flex flex-col items-start p-0 gap-[18px] w-[405px] h-[118px]">
          <div className="flex flex-row items-start p-0 gap-[6px] w-[405px] h-[46px]">
            <FaExclamationCircle size={20} color="#9B2033" />
            <p className="w-[379px] h-[46px] font-['IBM_Plex_Sans'] font-normal text-[14px] leading-[18px] text-[#9C9C9C]">
              Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.
            </p>
          </div>
        </div>
      </div>

      {/* Save Change Button */}
      <div className="flex flex-row items-center p-0 gap-[10px] w-[405px] h-[44px]"   >
        <button
          onClick={handleSubmit}
          className="flex flex-row justify-center items-center p-[40px] gap-[10px] w-[405px] h-[54px] bg-[#9B2033] rounded-[12px] border-none outline-none"
        >
          <span className="w-[93px] h-[11px] font-['IBM_Plex_Sans'] font-medium text-[16px] leading-[21px] text-center tracking-[-0.01em] text-white">
            Save Change
          </span>
        </button>
      </div>

    </div>
      <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[1010px]" />
    </div>
  );
}

