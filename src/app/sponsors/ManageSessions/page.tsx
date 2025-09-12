"use client"
import React,{useState} from 'react'
import {  FaArrowRight, FaCalendar, FaCalendarAlt, FaClock, FaPlay, FaSearch, FaStar } from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';
import { FaMessage } from 'react-icons/fa6';

const filters = ['Daily', 'Weekly', '10 Days', '90 Days', 'All Time'];

const allEvents = [
  {
    title: "Digital Transformation in MENA",
    speaker: "Dr. Sarah Hassan",
    speakerImage: "/images/img (7).png",
    time: "2:00 PM - 3:30 PM",
    tag: "Keynote",
    tagColor: "bg-blue-100 text-blue-700",
    duration: "90 minutes",
    room: "Hall B",
  },
  {
    title: "The Future of Regional Cooperation",
    speaker: "Prof. Omar Khalil",
    speakerImage: "/images/img (8).png",
    time: "10:00 AM - 11:30 AM",
    tag: "Panel",
    tagColor: "bg-yellow-100 text-yellow-700",
    duration: "90 minutes",
    room: "Hall B",
  },
  {
    title: "Innovation in Sustainable Energy",
    speaker: "Dr. Mathew",
    speakerImage: "/images/img (9).png",
    time: "4:00 PM - 5:00 PM",
    tag: "Workshop",
    tagColor: "bg-purple-100 text-purple-700",
    duration: "90 minutes",
    room: "Room C2",
  },
  {
    title: "Future of AI in Healthcare",
    speaker: "Dr. Anjali Mehta",
    speakerImage: "/images/img (10).png",
    time: "11:00 AM - 12:30 PM",
    tag: "Keynote",
    tagColor: "bg-blue-100 text-blue-700",
    duration: "90 minutes",
    room: "Hall C",
  },
  {
    title: "Renewable Energy Innovations",
    speaker: "Prof. Luis Martinez",
    speakerImage: "/images/img (11).png",
    time: "1:00 PM - 2:30 PM",
    tag: "Panel",
    tagColor: "bg-yellow-100 text-yellow-700",
    duration: "90 minutes",
    room: "Room A1",
  },
  {
    title: "Cybersecurity Trends 2025",
    speaker: "Ms. Hana Al-Farsi",
    speakerImage: "/images/img (12).png",
    time: "3:00 PM - 4:30 PM",
    tag: "Workshop",
    tagColor: "bg-purple-100 text-purple-700",
    duration: "90 minutes",
    room: "Hall D",
  },
];



export default function      () {
      const [activeFilter, setActiveFilter] = useState('Daily');
    
  return (
    <>
        <div className="p-6 md:p-10  min-h-screen font-sans">

  {/* Header */}
  <div className="flex flex-row items-start p-0 gap-10 w-full max-w-7xl h-24 mb-6">
    {/* Chats List Section */}
    <div className="box-sizing-border-box flex flex-col items-start p-6 gap-6 w-[621px] h-24 bg-[#FFEEEE] border border-[#D4D4D4] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-[20px] flex-none order-0 flex-grow">
      <div className="flex flex-col items-start p-0 gap-3.5 w-[557px] h-12 flex-none order-0 self-stretch flex-grow-0">
        <div className="flex flex-row items-center p-0 gap-4 w-[557px] h-12 flex-none order-0 self-stretch flex-grow-0">
          <div className="flex flex-col items-start p-0 gap-3.5 w-[510px] h-12 flex-none order-0 flex-grow">
            <div className="flex flex-row items-center p-0 gap-3.5 w-[510px] h-12 flex-none order-0 self-stretch flex-grow-0">
              <div className="w-12 h-12 bg-[#FFBEBE] rounded-lg flex items-center justify-center flex-none order-0 flex-grow-0">
                <FaMessage className="text-[#9B2033] text-xl" />
              </div>
              <div className="flex flex-col items-start p-0 gap-3.5 w-[448px] h-3.25 flex-none order-1 flex-grow">
                <h2 className="text-[18px] font-semibold leading-[100%] text-[#9B2033] w-[448px] h-3.25 flex-none order-0 self-stretch flex-grow-0 ">
                  Chats List
                </h2>
              </div>
              <Link href="/participants/Masseges" className="flex-none order-1 flex-grow-0">
                <FaArrowRight className="text-[#9B2033] text-[30px] w-[30px] h-[26px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Sponsors Section */}
    <div className="box-sizing-border-box flex flex-col items-start p-6 gap-6 w-[621px] h-24 bg-[#FFFAEE] border border-[#D4D4D4] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-[20px] flex-none order-1 flex-grow">
      <div className="flex flex-col items-start p-0 gap-3.5 w-[557px] h-[45px] flex-none order-0 self-stretch flex-grow-0">
        <div className="flex flex-row items-center p-0 gap-4 w-[557px] h-[45px] flex-none order-0 self-stretch flex-grow-0">
          <div className="flex flex-col items-start p-0 gap-3.5 w-[510px] h-[45px] flex-none order-0 flex-grow">
            <div className="flex flex-row items-center p-0 gap-3.5 w-[510px] h-[45px] flex-none order-0 self-stretch flex-grow-0">
              <div className="w-[45px] h-[45px] bg-[#FEF9C3] rounded-[7.5px] flex items-center justify-center flex-none order-0 flex-grow-0">
                <FaStar className="text-[#CA8A04] text-lg" />
              </div>
              <div className="flex flex-col items-start p-0 gap-3.5 w-[451px] h-3.25 flex-none order-1 flex-grow">
                <h2 className="text-[18px] font-semibold leading-[100%] text-[#9B2033] w-[451px] h-3.25 flex-none order-0 self-stretch flex-grow-0 ">
                  Sponsors
                </h2>
              </div>
              <Link href="/sponsors/Sponsors&Exhibitors" className="flex-none order-1 flex-grow-0">
                <FaArrowRight className="text-[#9B2033] text-[30px] w-[30px] h-[26px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-center gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex bg-white border border-gray-300 rounded-md px-3 py-2 w-full md:w-96">
              <FaSearch className="text-red-900 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-full"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 md:gap-5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-xl text-sm font-medium ${
                    activeFilter === filter
                      ? 'bg-[#86002B] text-white'
                      : 'bg-white border border-gray-300 text-black'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Date Selector */}
            <div className="flex items-center border border-gray-300 bg-white px-3 py-2 rounded-md text-sm text-gray-700">
              <FaCalendarAlt className="mr-2 text-red-500" />
              Jan 2024 - Dec 2024
            </div>

            {/* Filter Icon on Far Right */}
            <div className="text-gray-600 text-xl cursor-pointer hover:text-gray-800">
      <img src="/images/Frame 1000004593.png" alt="" />
            </div>
            </div>
    {/* Statistics Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
             {/* Total Sessions Card */}
             <div className="flex flex-col items-start p-6 bg-white border border-[#E6E6E6] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-3xl">
               <div className="flex flex-row items-center gap-4 w-full">
                 <div className="w-12 h-12 bg-[#DBEAFE] rounded-2xl flex items-center justify-center">
                   <FaCalendar className="w-6 h-6 text-[#2563EB]" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="flex items-end gap-2">
                     <span className="font-semibold text-4xl text-gray-700">24</span>
                     <span className="font-medium text-base text-green-600">+2</span>
                   </div>
                   <span className="font-normal text-lg text-gray-600">Total Sessions</span>
                 </div>
               </div>
             </div>

             {/* Ongoing Card */}
             <div className="flex flex-col items-start p-6 bg-white border border-[#E6E6E6] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-3xl">
               <div className="flex flex-row items-center gap-4 w-full">
                 <div className="w-12 h-12 bg-[#DCFCE7] rounded-2xl flex items-center justify-center">
                   <FaPlay className="w-6 h-6 text-[#16A34A]" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="flex items-end gap-2">
                     <span className="font-semibold text-4xl text-gray-700">5</span>
                     <span className="font-medium text-base text-green-600">+2</span>
                   </div>
                   <span className="font-normal text-lg text-gray-600">Ongoing</span>
                 </div>
               </div>
             </div>

             {/* Scheduled Card */}
             <div className="flex flex-col items-start p-6 bg-white border border-[#E6E6E6] shadow-[0px_4px_110.3px_rgba(68,68,68,0.05)] rounded-3xl">
               <div className="flex flex-row items-center gap-4 w-full">
                 <div className="w-12 h-12 bg-[#FEF9C3] rounded-2xl flex items-center justify-center">
                   <FaClock className="w-6 h-6 text-[#CA8A04]" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <div className="flex items-end gap-2">
                     <span className="font-semibold text-4xl text-gray-700">12</span>
                     <span className="font-medium text-base text-green-600">+2</span>
                   </div>
                   <span className="font-normal text-lg text-gray-600">Scheduled</span>
                 </div>
               </div>
             </div>
           </div>
     
      <div className="flex justify-end text-black mb-4">
  <p>View Details</p>
</div>
 {/* Agenda Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allEvents.map((event, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between h-[380px]"
        >
          {/* Top Row */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-black">{event.title}</h2>
            <span className="text-gray-400 text-lg cursor-pointer">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.5V15.2406C0 15.6594 0.340625 16 0.759375 16C0.915625 16 1.06875 15.9531 1.19687 15.8625L6 12.5L10.8031 15.8625C10.9313 15.9531 11.0844 16 11.2406 16C11.6594 16 12 15.6594 12 15.2406V1.5C12 0.671875 11.3281 0 10.5 0H1.5C0.671875 0 0 0.671875 0 1.5Z"
                  fill="#9B2033"
                />
              </svg>
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 mb-3">
            Exploring the role of diplomacy and collaboration in driving
            technological advancement and sustainable policies.
          </p>
          <div className="border border-b-gray-300">
</div>


          {/* Speaker with Image */}
          <div className="flex items-center text-xs text-gray-600 mb-1 space-x-2">
            <img
              src={event.speakerImage}
              alt={event.speaker}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span>{event.speaker}</span>
          </div>

          {/* Time & Tag */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-xs text-gray-600">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4594 26.0046H6.0616C5.40605 26.0046 4.77735 25.7442 4.31381 25.2807C3.85026 24.8171 3.58984 24.1884 3.58984 23.5329V8.70231C3.58984 8.04676 3.85026 7.41806 4.31381 6.95451C4.77735 6.49097 5.40605 6.23055 6.0616 6.23055H20.8922C21.5477 6.23055 22.1764 6.49097 22.64 6.95451C23.1035 7.41806 23.3639 8.04676 23.3639 8.70231V13.6458H3.58984M22.128 17.3535V22.297H27.0716M22.128 17.3535C23.4392 17.3535 24.6966 17.8743 25.6236 18.8014C26.5507 19.7285 27.0716 20.9859 27.0716 22.297M22.128 17.3535C20.8169 17.3535 19.5595 17.8743 18.6325 18.8014C17.7054 19.7285 17.1845 20.9859 17.1845 22.297C17.1845 23.6081 17.7054 24.8655 18.6325 25.7926C19.5595 26.7197 20.8169 27.2405 22.128 27.2405C23.4392 27.2405 24.6966 26.7197 25.6236 25.7926C26.5507 24.8655 27.0716 23.6081 27.0716 22.297M18.4204 3.75879V8.70231M8.53337 3.75879V8.70231"
                  stroke="#2D7DD2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-1">{event.time}</span>
            </div>
            <span
              className={`px-2 py-2 rounded-xl text-xs font-semibold ${event.tagColor}`}
            >
              {event.tag}
            </span>
          </div>

         {/* Duration & Room */}
<div className="flex text-xs text-gray-900 mb-2 items-center justify-between">
  <span>Duration: 
    
  </span>
  <span>{event.duration} </span>
</div>
<div className="flex text-xs text-gray-900 mb-2 items-center justify-between">
  <span>Root: 
    
  </span>
  <span>{event.room} </span>
</div>


          {/* View Details Button */}
      
 <button
      className="w-full bg-[#9B2033] text-white py-2 text-sm rounded-md hover:bg-red-700 transition"
    >
<a href="/participants/SessionDetail1" >
  View Details
</a>    </button>
          

        </div>
      ))}
    </div>

                  </div>
          <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute " />

            </>
  )
}
