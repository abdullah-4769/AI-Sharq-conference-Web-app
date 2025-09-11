'use client';

import React, { useState } from 'react';
import { FaUser, FaEye, FaEyeSlash, FaPlus } from 'react-icons/fa';
import Image from 'next/image';

const SetUpYourProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: '',
    linkedSession: '',
    website: '',
    biography: '',
    specialty: '',
  });

  const [specialties, setSpecialties] = useState<string[]>(['Keynote Speaker']);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const addSpecialty = () => {
    if (formData.specialty.trim() && !specialties.includes(formData.specialty.trim())) {
      setSpecialties(prev => [...prev, formData.specialty.trim()]);
      setFormData(prev => ({ ...prev, specialty: '' }));
    }
  };

  const removeSpecialty = (specialty: string) => {
    setSpecialties(prev => prev.filter(s => s !== specialty));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    console.log('Specialties:', specialties);
    console.log('Profile Image:', profileImage);
  };

  const handleSkip = () => {
    // Handle skip logic here
    console.log('Skipped');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 w-full max-w-lg">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-medium text-gray-900 text-center">
              Set Up Your Speaker Profile
            </h1>
            <p className="text-base text-gray-900 text-center max-w-sm">
              Complete your profile to personalize your event experience and connect with others.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 bg-red-100 border-4 border-white rounded-full shadow-md flex items-center justify-center">
                <FaUser className="text-4xl text-red-600" />
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 w-11 h-11 bg-red-600 rounded-full shadow-md flex items-center justify-center"
                onClick={() => document.getElementById('profile-upload')?.click()}
              >
                <FaPlus className="text-white text-lg" />
              </button>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <p className="text-base text-gray-900 text-center">Upload or Take Photo</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter a Speaker Name"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Speaker Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johnathan@gmail.com"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Set Password*</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="yourname@gmail.com|"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Confirm Password*</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="yourname@gmail.com|"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Organization / Affiliation*</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Middle East Institute"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Role/Designation*</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Director of Regional Affairs"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Linked Session*</label>
              <input
                type="text"
                name="linkedSession"
                value={formData.linkedSession}
                onChange={handleInputChange}
                placeholder="Innovation in Sustainable Energy"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Website*</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="www.website.com"
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Biography</label>
              <textarea
                name="biography"
                value={formData.biography}
                onChange={handleInputChange}
                placeholder="Describe your topic in detail"
                rows={4}
                className="w-full px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-base text-gray-900">Specialty</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  placeholder="Keynote Speaker"
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-xl text-base text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="button"
                  onClick={addSpecialty}
                  className="px-3 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    {specialty}
                    <button
                      type="button"
                      onClick={() => removeSpecialty(specialty)}
                      className="text-yellow-800 hover:text-yellow-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 py-4 bg-red-600 text-white rounded-xl font-medium text-base hover:bg-red-700 transition-colors"
              >
                Save & Continue
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="flex-1 py-4 border border-gray-300 text-gray-900 rounded-xl font-normal text-base hover:bg-gray-50 transition-colors"
              >
                Skip for Now
              </button>
            </div>
          </form>
        </div>
      </div>
       <Image src="/images/line.png" alt="Line" width={1450} height={127} className="absolute top-[1850px]" />
    </div>
  );
};

export default SetUpYourProfile;
