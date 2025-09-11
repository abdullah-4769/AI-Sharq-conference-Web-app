import React, { useState } from 'react';
import { FaPlus, FaUpload } from 'react-icons/fa';
import Image from 'next/image';

type AddNewVenuePopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNewVenuePopup = ({ isOpen, onClose }: AddNewVenuePopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-10">
      <div className="box-border flex flex-col items-center p-[42px] gap-[42px] w-[525px] bg-white border border-[#D4D4D4] shadow-[0px_4px_110.3px_rgba(68,68,68,0.25)] rounded-[20px]">
        {/* Logo */}
        <div className="w-[196px] h-[57.89px] bg-gray-200 flex-none order-0">
          {/* Replace with actual logo image */}
         <Image src="/images/logo1.png" alt="Logo" width={196} height={58} />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center p-0 gap-[32px] w-[358px] h-[17px] flex-none order-1">
          <h2 className="w-[171px] h-[17px] font-['IBM_Plex_Sans'] font-medium text-[24px] leading-[30px] text-center tracking-[-0.01em] text-[#282828]">
            Add New Venue
          </h2>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col items-start p-0 gap-[24px] w-[405px] flex-none order-2">
          {/* Map Title Field */}
          <div className="flex flex-col items-start p-0 gap-[12px] w-[405px]">
            <label className="w-full h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
              Map Title*
            </label>
            <div className="flex flex-row items-start p-0 gap-[6px] w-[405px]">
              <div className="box-border flex flex-col justify-center items-start p-[17px_19px] gap-[10px] w-[405px] border border-[#DEDEDE] rounded-[10px]">
                <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                  <div className="flex flex-col items-start p-0 gap-[12px] w-[367px]">
                    <input
                      type="text"
                      placeholder="Enter a clear title"
                      className="w-[190px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#616161] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assign Event Field */}
          <div className="flex flex-col items-start p-0 gap-[12px] w-[405px]">
            <label className="w-full h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
              Assign Event*
            </label>
            <div className="flex flex-row items-start p-0 gap-[6px] w-[405px]">
              <div className="box-border flex flex-col justify-center items-start p-[17px_19px] gap-[10px] w-[405px] border border-[#DEDEDE] rounded-[10px]">
                <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                  <div className="flex flex-col items-start p-0 gap-[12px] w-[367px]">
                    <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                      <span className="w-[331px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#616161]">
                        Select an event
                      </span>
                      <div className="w-[24px] h-[24px] text-[#9B2033]">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Field */}
          <div className="flex flex-col items-start p-0 gap-[12px] w-[405px]">
            <label className="w-full h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
              Location*
            </label>
            <div className="flex flex-row items-start p-0 gap-[6px] w-[405px]">
              <div className="box-border flex flex-col justify-center items-start p-[17px_19px] gap-[10px] w-[405px] border border-[#DEDEDE] rounded-[10px]">
                <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                  <div className="flex flex-col items-start p-0 gap-[12px] w-[367px]">
                    <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                      <span className="w-full font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#616161]">
                        New York, USA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Field */}
          <div className="flex flex-col items-start p-0 gap-[12px] w-[405px]">
            <label className="w-full h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
              Description
            </label>
            <div className="flex flex-row items-start p-0 gap-[6px] w-[405px]">
              <div className="box-border flex flex-col items-start p-[17px_19px] gap-[10px] w-[405px] h-[115px] border border-[#DEDEDE] rounded-[10px]">
                <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                  <div className="flex flex-col items-start p-0 gap-[12px] w-[367px]">
                    <textarea
                      placeholder="Describe your topic in detail"
                      className="w-[200px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#616161] outline-none resize-none h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Media Field */}
          <div className="flex flex-col items-start p-0 gap-[12px] w-[405px]">
            <label className="w-full h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
              Upload Media
            </label>
            <div className="flex flex-row items-start p-0 gap-[6px] w-[405px]">
              <div className="box-border flex flex-col justify-center items-center p-[17px_19px] gap-[10px] w-[405px] h-[115px] border border-dashed border-[#DEDEDE] rounded-[10px]">
                <div className="flex flex-col justify-center items-center p-0 gap-[12px] w-[367px]">
                  <div className="w-[24px] h-[24px] text-[#9B2033]">
                   <FaUpload className="w-full h-full" />
                  </div>
                  <span className="font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#616161]">
                    Upload Media
                  </span>
                  <p className="w-full font-['IBM_Plex_Sans'] font-normal text-[12px] leading-[16px] text-center text-[#616161]">
                    Drag and drop your map file here, or click to browse
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visibility Field */}
          <div className="flex flex-col items-start p-0 gap-[12px] w-[405px]">
            <label className="w-full h-[11px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#262626]">
              Visibility*
            </label>
            <div className="flex flex-row items-start p-0 gap-[6px] w-[405px]">
              <div className="box-border flex flex-col justify-center items-start p-[17px_19px] gap-[10px] w-[405px] border border-[#DEDEDE] rounded-[10px]">
                <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                  <div className="flex flex-col items-start p-0 gap-[12px] w-[367px]">
                    <div className="flex flex-row items-center p-0 gap-[12px] w-[367px]">
                      <span className="w-[331px] font-['IBM_Plex_Sans'] font-normal text-[16px] leading-[21px] text-[#616161]">
                        Map Visible to Participants
                      </span>
                      <div className="w-[24px] h-[24px] text-[#9B2033]">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Button */}
          <div className="flex flex-row items-center p-0 gap-[10px] w-[405px]">
            <button className="flex flex-row justify-center items-center p-[40px] gap-[10px] w-[405px] h-[54px] bg-[#9B2033] rounded-[12px]">
              <span className="w-[30px] font-['IBM_Plex_Sans'] font-medium text-[16px] leading-[21px] text-center tracking-[-0.01em] text-white">
                Add
              </span>
            </button>
          </div>
        </div>

        {/* Close button (optional) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// Component that uses the popup
const VenueManager = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="p-4">
      {/* Your button to open the popup */}
      <button 
        onClick={() => setIsPopupOpen(true)}
        className="flex flex-row items-center p-0 gap-2 w-[129.38px] h-8 bg-[#9B2033] rounded px-3 py-2"
      >
        <FaPlus className="w-3 h-3 text-white" />
        <span className="font-normal text-sm leading-[140%] text-white">
          Add New Venue
        </span>
      </button>

      {/* The Popup */}
      <AddNewVenuePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
};

export default AddNewVenuePopup;