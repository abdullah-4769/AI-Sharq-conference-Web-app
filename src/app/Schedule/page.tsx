"use client"
import React,{useState} from 'react'
import { FaCalendarAlt, FaSearch } from 'react-icons/fa'
import Image from 'next/image';

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
      <div className="flex items-center gap-2 mb-6">
<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.627825 11.4704C-0.209275 12.3164 -0.209275 13.6904 0.627825 14.5364L11.3427 25.3655C12.1798 26.2115 13.5393 26.2115 14.3764 25.3655C15.2135 24.5195 15.2135 23.1455 14.3764 22.2995L7.31123 15.1658H27.857C29.0424 15.1658 30 14.198 30 13C30 11.802 29.0424 10.8342 27.857 10.8342H7.31793L14.3697 3.70051C15.2068 2.85448 15.2068 1.48054 14.3697 0.634518C13.5326 -0.211506 12.1731 -0.211506 11.336 0.634518L0.621128 11.4636L0.627825 11.4704Z" fill="#9B2033"/>
</svg>
        <h1 className="text-xl font-semibold text-black ml-4">Conference Schedule</h1>
      </div>
      <div className="flex  md:flex-nowrap  justify-between  mb-6">
            {/* Search Bar */}
            <div className="flex  bg-white border border-gray-300 rounded-md px-3 py-2 w-[385px] ">
              <FaSearch className="text-red-900 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-full"
              />
            </div>
      
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-1 rounded-xl text-sm font-medium ${
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
              <FaCalendarAlt className="mr-2 text-gray-500" />
              Jan 2024 - Dec 2024
            </div>
      
            {/* Filter Icon on Far Right */}
            <div className="text-gray-600 text-xl cursor-pointer hover:text-gray-800">
      <img src="images/Frame 1000004593.png" alt="" />
            </div>
            </div>
             {/* Latest Update Banner */}
      <div className="bg-red-900 text-white p-4 rounded-lg flex justify-between items-center mb-6">
        <div className=''>
          <p className="mt-2 text-lg font-medium">My Agenda</p>
          <p className="text-sm text-gray-300">2 sessions bookmarked</p>
        </div>
        <button className="text-white text-xl"><svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3722 11.4704C30.2093 12.3164 30.2093 13.6904 29.3722 14.5364L18.6573 25.3655C17.8202 26.2115 16.4607 26.2115 15.6236 25.3655C14.7865 24.5195 14.7865 23.1455 15.6236 22.2995L22.6888 15.1658H2.14298C0.957643 15.1658 0 14.198 0 13C0 11.802 0.957643 10.8342 2.14298 10.8342H22.6821L15.6303 3.70051C14.7932 2.85448 14.7932 1.48054 15.6303 0.634518C16.4674 -0.211506 17.8269 -0.211506 18.664 0.634518L29.3789 11.4636L29.3722 11.4704Z" fill="white"/>
</svg>
</button>
      </div>
      <div className="flex justify-end text-black">
  <p>View Details</p>
</div><br></br>
 {/* Agenda Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
<a href="/SessionDetail1" >
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
