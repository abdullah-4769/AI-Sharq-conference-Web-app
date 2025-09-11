'use client';

import React, { useState } from 'react';
import { FaArrowLeft, FaCalendar, FaClock, FaPlay, FaPlus } from 'react-icons/fa';
import { FiSearch, FiMapPin, FiClock } from 'react-icons/fi';
import { IoMdArrowBack } from 'react-icons/io';
import AddNewVenuePopup from '../../components/AddNewVenuePopup';
import LiveLoaction3 from '@/app/components/LiveLoaction3';


const VenueMaps = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const venues = [
    {
      id: 1,
      name: 'Main Hall Map',
      website: 'www.techcorp.com',
      email: 'contact@techcorp.com',
      description: 'Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      tags: ['Keynote speaker', '3 Sessions']
    },
    {
      id: 2,
      name: 'Conference Room A',
      website: 'www.techcorp.com',
      email: 'contact@techcorp.com',
      description: 'Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
     tags: ['Keynote speaker', '3 Sessions']
    },
    {
      id: 3,
      name: 'Exhibition Hall',
      website: 'www.techcorp.com',
      email: 'contact@techcorp.com',
      description: 'Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
     tags: ['Keynote speaker', '3 Sessions']
    },
     {
      id: 4,
      name: 'Exhibition Hall',
      website: 'www.techcorp.com',
      email: 'contact@techcorp.com',
      description: 'Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      tags: ['Keynote speaker', '3 Sessions']
    }
  ];

  return (
    <div className="flex flex-col items-end p-0 gap-8 w-full max-w-[1280px] h-[1956px] absolute left-20 top-38">
      {/* Header */}
      <div className="flex flex-row items-center p-0 gap-8 w-[1280px] h-6">
        <div className="flex flex-row items-center p-0 gap-8 w-[1280px] h-6">
          <FaArrowLeft className="w-9 h-9 text-[#7e0505]" />
          <h1 className=" font-medium text-4xl leading-6 text-[#282828]">
            Venue Maps
          </h1>
        </div>
      </div>
      

      {/* Statistics Cards */}
      <div className="flex flex-row items-start p-0 gap-6 w-[1280px] h-[103px]">
        {/* Total Sessions Card */}
        <div className="flex flex-col items-start p-5 gap-8 w-[410.67px] h-[103px] bg-white border border-[#E6E6E6] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-3xl">
          <div className="flex flex-row items-center p-0 gap-8 w-[356.67px] h-[63px]">
            <div className="flex flex-row items-start p-0 gap-7 w-12 h-12">
              <div className="flex flex-row items-center p-0 gap-5 w-12 h-12">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-2xl flex items-center justify-center">
                  <FaCalendar className="w-5 h-7 text-[#2563EB]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start p-0 gap-4 w-[275.67px] h-[63px]">
              <div className="flex flex-row items-end p-0 gap-3 w-24 h-8">
                <span className=" font-semibold text-6xl leading-[50%] text-[rgba(0,0,0,0.7)]">
                  24
                </span>
                <span className=" font-medium text-base leading-[140%] text-[#1DAF00]">
                  +2
                </span>
              </div>
              <span className=" font-normal text-lg leading-[140%] text-[#414141]">
                Total Sessions
              </span>
            </div>
          </div>
        </div>

        {/* Ongoing Card */}
        <div className="flex flex-col items-start p-5 gap-8 w-[410.67px] h-[103px] bg-white border border-[#E6E6E6] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-3xl">
          <div className="flex flex-row items-center p-0 gap-8 w-[356.67px] h-[63px]">
            <div className="flex flex-row items-start p-0 gap-7 w-12 h-12">
              <div className="flex flex-row items-center p-0 gap-5 w-12 h-12">
                <div className="w-12 h-12 bg-[#DCFCE7] rounded-2xl flex items-center justify-center">
                  <FaPlay className="w-5 h-7 text-[#16A34A]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start p-0 gap-4 w-[275.67px] h-[63px]">
              <div className="flex flex-row items-end p-0 gap-3 w-8 h-8">
                <span className=" font-semibold text-6xl leading-[50%] text-[rgba(0,0,0,0.7)]">
                  5
                </span>
                <span className=" font-medium text-base leading-[140%] text-[#1DAF00]">
                  +2
                </span>
              </div>
              <span className=" font-normal text-lg leading-[140%] text-[#414141]">
                Ongoing
              </span>
            </div>
          </div>
        </div>

        {/* Scheduled Card */}
        <div className="flex flex-col items-start p-5 gap-8 w-[410.67px] h-[103px] bg-white border border-[#E6E6E6] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-3xl">
          <div className="flex flex-row items-center p-0 gap-8 w-[356.67px] h-[63px]">
            <div className="flex flex-row items-start p-0 gap-7 w-12 h-12">
              <div className="flex flex-row items-center p-0 gap-5 w-12 h-12">
                <div className="w-12 h-12 bg-[#FEF9C3] rounded-2xl flex items-center justify-center">
                  <FaClock className="w-5 h-7 text-[#CA8A04]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start p-0 gap-4 w-[275.67px] h-[63px]">
              <div className="flex flex-row items-end p-0 gap-3 w-24 h-8">
                <span className=" font-semibold text-6xl leading-[50%] text-[rgba(0,0,0,0.7)]">
                  12
                </span>
                <span className=" font-medium text-base leading-[140%] text-[#1DAF00]">
                  +2
                </span>
              </div>
              <span className=" font-normal text-lg leading-[140%] text-[#414141]">
                Scheduled
              </span>
            </div>
          </div>
        </div>
      </div>

<LiveLoaction3 />
      {/* Search Bar */}
      <div className="flex flex-row items-center p-0 gap-4 w-[1280px] h-11">
        <div className="flex flex-col justify-center items-center p-4 gap-2.5 w-[1280px] h-11 border border-[#E8E8E8] rounded-2xl">
          <div className="flex flex-row items-center p-0 gap-3 w-[1240px] h-6">
            <FiSearch className="w-6 h-6 text-red-500" />
            <span className=" font-normal text-base leading-[140%] text-[#706f6f]">
              Search Venue
            </span>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex flex-row items-center gap-8 w-[1280px] h-11">
        <div className="flex flex-row items-center gap-[1000px] w-[1282px] h-11">
          <div
            className="flex flex-col justify-center items-center p-4 w-[205px] h-11 bg-[#9B2033] border border-[#9B2033] rounded-2xl cursor-pointer"
            onClick={() => setIsPopupOpen(true)}
          >
            <div className="flex flex-row justify-center items-start gap-3">
              <FaPlus className="w-3 h-3 text-white" />
              <span className="font-normal text-sm text-white">Add New Venue</span>
            </div>
          </div>
          <span className="font-medium text-base leading-6 text-[#282828]">View All</span>
        </div>
      </div>

      {/* Venue Details Cards */}
      <div className="flex flex-col items-start p-0 gap-6 w-[1280px] h-[924px]">
        <div className="flex flex-col items-start p-0 gap-6 w-[1280px] h-[450px]">
          {venues.map((venue) => (
            <div key={venue.id} className="flex flex-col items-end p-6 gap-6 w-[1280px] h-[213px] bg-white border border-[#D4D4D4] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-3xl">
              <div className="flex flex-row items-start p-0 gap-6 w-[1216px] h-[97px]">
                <div className="flex flex-col items-start p-0 gap-4 w-[1216px] h-[97px]">
                  <div className="flex flex-row items-center p-0 gap-6 w-[1216px] h-[97px]">
                    <div className="flex flex-row items-center p-0 gap-6 w-[1216px] h-[97px]">
                      <div className="flex flex-row items-center p-0 gap-6 w-[1216px] h-[97px]">
                        <div className="w-44 h-24 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">GC</span>
                        </div>
                        <div className="flex flex-col justify-center items-start p-0 gap-6 w-full h-[87px]">
                          <div className="flex flex-row items-center p-0 gap-[300px] w-full h-8">
                            <div className="flex flex-row items-center p-0 gap-3"><span className=" font-semibold text-lg leading-6 text-[#282828]">
                              {venue.name}
                            </span>
                            <div className="w-1 h-1 bg-[#9B2033] rounded-full"></div>
                            <span className=" font-normal text-base leading-6 text-[#282828]">
                              {venue.website}
                            </span>
                            <div className="w-1 h-1 bg-[#9B2033] rounded-full"></div>
                            <span className=" font-normal text-base leading-6 text-[#282828]">
                              {venue.email}
                            </span>
                            </div>
                           <div className="flex flex-row items-center p-0 gap-3">{venue.tags.map((tag, index) => {
                              const isKeynoteSpeaker = tag === 'Keynote speaker';
                              return (
                                <div key={index} className={`flex flex-row items-start p-2.5 gap-2.5 ${isKeynoteSpeaker ? 'w-41' : 'w-28'} h-8 ${isKeynoteSpeaker ? 'bg-[#91C6FF]' : 'bg-[#FCDCDC]'} rounded-full`}>
                                  <span className={` font-medium text-lg leading-[80%] ${isKeynoteSpeaker ? 'text-[#1E40AF]' : 'text-[#9B2033]'}`}>
                                    {tag}
                                  </span>
                                </div>
                              );
                            })}</div>
                            
                          </div>
                          <span className=" font-normal text-sm leading-[140%] text-[#424242] w-[1095px] h-7">
                            {venue.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center items-start p-0 gap-3 w-[367px] h-11">
                <div className="flex flex-row items-center p-0 gap-3 w-[114.33px] h-11">
                  <div className="flex flex-col justify-center items-center p-4 gap-2.5 w-[114.33px] h-11 bg-[#9B2033] border border-[#9B2033] rounded-2xl">
                    <span className=" font-bold text-sm leading-2 text-white">
                      Edit
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center p-4 gap-2.5 w-[114.33px] h-11 border border-[#8C8C8C] rounded-2xl">
                    <span className=" font-bold text-sm leading-2 text-[#282828]">
                      Delete
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center p-4 gap-2.5 w-[114.33px] h-11 border border-[#8C8C8C] rounded-2xl">
                    <span className=" font-bold text-sm leading-2 text-[#282828]">
                      View
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* 🔥 The Popup */}
      <AddNewVenuePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default VenueMaps;
