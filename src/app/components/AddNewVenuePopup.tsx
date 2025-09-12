'use client';
import React from 'react';
import { FaUpload } from 'react-icons/fa';
import Image from 'next/image';

type AddNewVenuePopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNewVenuePopup = ({ isOpen, onClose }: AddNewVenuePopupProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-[9998]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-lg relative max-h-[90vh] overflow-y-auto">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image src="/images/logo1.png" alt="Logo" width={196} height={58} />
          </div>

          {/* Title */}
          <h2 className="text-center text-[24px] font-medium text-[#282828] mb-8">
            Add New Venue
          </h2>

          {/* Form */}
          <div className="space-y-6">

            {/* Map Title */}
            <div>
              <label className="block text-[16px] text-[#262626] mb-2">Map Title*</label>
              <input
                type="text"
                placeholder="Enter a clear title"
                className="w-full border border-[#DEDEDE] rounded-lg px-4 py-3 text-[#616161] outline-none"
              />
            </div>

            {/* Assign Event */}
            <div>
              <label className="block text-[16px] text-[#262626] mb-2">Assign Event*</label>
              <div className="w-full border border-[#DEDEDE] rounded-lg px-4 py-3 text-[#616161] flex justify-between items-center cursor-pointer">
                <span>Select an event</span>
                <span className="text-[#9B2033]">▼</span>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-[16px] text-[#262626] mb-2">Location*</label>
              <div className="w-full border border-[#DEDEDE] rounded-lg px-4 py-3 text-[#616161]">
                New York, USA
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[16px] text-[#262626] mb-2">Description</label>
              <textarea
                placeholder="Describe your topic in detail"
                className="w-full h-[115px] border border-[#DEDEDE] rounded-lg px-4 py-3 text-[#616161] resize-none outline-none"
              />
            </div>

            {/* Upload Media */}
            <div>
              <label className="block text-[16px] text-[#262626] mb-2">Upload Media</label>
              <div className="w-full h-[115px] border border-dashed border-[#DEDEDE] rounded-lg flex flex-col items-center justify-center text-[#616161] text-center px-4 cursor-pointer">
                <FaUpload className="text-[#9B2033] text-xl mb-2" />
                <span>Upload Media</span>
                <p className="text-[12px]">Drag and drop your map file here, or click to browse</p>
              </div>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-[16px] text-[#262626] mb-2">Visibility*</label>
              <div className="w-full border border-[#DEDEDE] rounded-lg px-4 py-3 text-[#616161] flex justify-between items-center cursor-pointer">
                <span>Map Visible to Participants</span>
                <span className="text-[#9B2033]">▼</span>
              </div>
            </div>

            {/* Add Button */}
            <button className="w-full h-[54px] bg-[#9B2033] text-white text-[16px] font-medium rounded-lg">
              Add
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewVenuePopup;
