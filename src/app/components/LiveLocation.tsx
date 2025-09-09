import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LiveLocation: React.FC = () => {
  return (
    <div className="flex flex-row items-start gap-[21px] w-[1280px] h-[410px]">
      {/* Booth Information Card */}
      <div className="flex flex-row items-center gap-[10px] w-[304px] h-[410px]">
        <div className="w-[304px] h-[410px] relative">
          {/* Rectangle 161123902 */}
          <div className="absolute w-[304px] h-[410px] left-0 top-0 bg-white border border-gray-300 shadow-sm rounded-2xl"></div>

          {/* Frame 2147223749 */}
          <div className="absolute w-[233px] h-[305px] left-[38px] top-[52px] flex flex-col gap-[40px]">
            {/* Booth Information Header */}
            <div className="flex flex-row justify-center items-center gap-[38px] w-[233px] h-[17px]">
              <span className="text-[24px] font-medium text-[#282828] font-['IBM_Plex_Sans'] leading-[24px]">
                Booth Information
              </span>
            </div>

            {/* Booth Details */}
            <div className="flex flex-col gap-[32px] w-[233px] h-[248px]">
              {/* Booth Number */}
              <div className="flex flex-col gap-[15px] w-[233px] h-[38px]">
                <span className="text-[18px] font-semibold text-[#282828] font-['IBM_Plex_Sans'] leading-[27px]">
                  Booth Number
                </span>
                <span className="text-[14px] text-[#424242] font-['IBM_Plex_Sans'] leading-[20px]">
                  C12
                </span>
              </div>

              {/* Hall Location */}
              <div className="flex flex-col gap-[15px] w-[233px] h-[38px]">
                <span className="text-[18px] font-semibold text-[#282828] font-['IBM_Plex_Sans'] leading-[27px]">
                  Hall Location
                </span>
                <span className="text-[14px] text-[#424242] font-['IBM_Plex_Sans'] leading-[20px]">
                  Hall 2
                </span>
              </div>

              {/* Walking Distance */}
              <div className="flex flex-col gap-[15px] w-[233px] h-[38px]">
                <span className="text-[18px] font-semibold text-[#282828] font-['IBM_Plex_Sans'] leading-[27px]">
                  45m
                </span>
                <span className="text-[14px] text-[#424242] font-['IBM_Plex_Sans'] leading-[20px]">
                  Walking Distance
                </span>
              </div>

              {/* Open Status */}
              <div className="flex flex-col gap-[15px] w-[233px] h-[38px]">
                <span className="text-[18px] font-semibold text-[#282828] font-['IBM_Plex_Sans'] leading-[27px]">
                  Open
                </span>
                <span className="text-[14px] text-[#424242] font-['IBM_Plex_Sans'] leading-[20px]">
                  Until 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-[955px] h-[410px] relative">
        {/* Rectangle 161123901 */}
        <div className="absolute w-[955px] h-[410px] left-0 top-0 bg-white border border-gray-300 shadow-sm rounded-2xl overflow-hidden">
          <Image
            src="/images/map.png"
            alt="Map"
            width={955}
            height={410}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Pin Icon on Map */}
        <div className="absolute w-[22px] h-[22px] left-[453px] top-[193px]">
          <FaMapMarkerAlt className="w-full h-full text-[#9B2033]" />
        </div>

        {/* Ellipse 12 */}
        <div className="absolute w-[30px] h-[30px] left-[57px] top-[59px] bg-[#9B2033] opacity-20 rounded-full"></div>

        {/* Ellipse 11 */}
        <div className="absolute w-[14px] h-[14px] left-[65px] top-[67px] bg-[#9B2033] rounded-full"></div>

        {/* A12 Hall 1 Badge */}
        <div className="absolute flex flex-row justify-center items-center gap-[10px] w-[99px] h-[31px] left-[414px] top-[222px] bg-[#9B2033] rounded-full px-[12px] py-[10px]">
          <span className="text-[16px] font-medium text-white font-['IBM_Plex_Sans'] leading-[24px]">
            A12 Hall 1
          </span>
        </div>

        {/* You Badge */}
        <div className="absolute flex flex-row justify-center items-center gap-[10px] w-[51px] h-[31px] left-[46px] top-[96px] bg-[#9B2033] rounded-full px-[12px] py-[10px]">
          <span className="text-[16px] font-medium text-white font-['IBM_Plex_Sans'] leading-[24px]">
            You
          </span>
        </div>
      </div>
    </div>
  );
};

export default LiveLocation;
