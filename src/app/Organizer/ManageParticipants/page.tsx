"use client"
import Link from 'next/link'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeft, FaBookmark, FaCalendarAlt, FaPlay, FaRegListAlt, FaSearch } from 'react-icons/fa'




const filters = ["Daily", "Weekly", "10 Days", "90 Days", "All Time"];

const stats = [
  {
    label: "Total Sessions",
    value: 24,
    change: "+2",
    percent: "2.5%",
    icon: <FaRegListAlt className="text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    label: "Ongoing",
    value: 5,
    change: "+1",
    percent: "1.2%",
    icon: <FaPlay className="text-green-600" />,
    iconBg: "bg-green-100",
  },
  {
    label: "Subscribed",
    value: 12,
    change: "+3",
    percent: "0.8%",
    icon: <FaBookmark className="text-yellow-600" />,
    iconBg: "bg-yellow-100",
  },
];


const users = [
  {
    id: 1,
    name: "Dr. Johnathan",
    role: "Director of Regional Affairs",
    email: "johnathan@gmail.com",
    image: "/images/David.jpg",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Innovation Labs",
    email: "sarah@gmail.com",
    image: "/images/Sara.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Data Analytics Team",
    email: "michael.chen@gmail.com",
    image: "/images/img (14).png",
  },
  {
    id: 4,
    name: "Ava Robinson",
    role: "User Experience Research",
    email: "ava.robinson@gmail.com",
    image: "/images/Ava.jpg",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Product Development",
    email: "david.kim@gmail.com",
    image: "/images/David.jpg",
  },
  {
    id: 6,
    name: "Emily Jameson",
    role: "Marketing Strategy",
    email: "emily.jameson@gmail.com",
    image: "/images/Sara.png",
  },
  {
    id: 7,
    name: "Sophie Patel",
    role: "Sales Operations",
    email: "sophie.patel@gmail.com",
    image: "/images/img (13).png",
  },
  {
    id: 8,
    name: "Ryan O'Connor",
    role: "Customer Support",
    email: "ryan.oconnor@gmail.com",
    image: "/images/Ava.jpg",
  },
];
export default function page() {
    const [activeFilter, setActiveFilter] = useState("Daily");
      const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
        <div className="min-h-screen bg-[#FAFAFA] px-4 md:px-10 py-6 space-y-8 relative">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Link href="/Organizer/Dashboard">
            <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900 ml-5">Manage Participants</h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex bg-white border border-gray-300 rounded-md px-3 py-2 w-full md:w-[300px]">
            <FaSearch className="text-red-900 mr-2 mt-1" />
            <input
              type="text"
              placeholder="Search sessions or speakers"
              className="outline-none text-sm w-full"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  activeFilter === filter
                    ? "bg-[#86002B] text-white"
                    : "bg-white border border-gray-300 text-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center border border-gray-300 bg-white px-3 py-2 rounded-md text-sm text-gray-700">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            Jan 2024 - Dec 2024
          </div>
        </div>
<div className="flex items-center border border-gray-200 rounded-lg p-4 bg-white max-w-8xl mx-auto">
  <div className="flex flex-col">
    <div className="flex items-center space-x-2 text-red-800 text-sm cursor-pointer">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <path
          d="M10.125 1.125C10.125 0.502734 9.62227 0 9 0C8.37773 0 7.875 0.502734 7.875 1.125V9.65742L5.29453 7.07695C4.85508 6.6375 4.14141 6.6375 3.70195 7.07695C3.2625 7.51641 3.2625 8.23008 3.70195 8.66953L8.20195 13.1695C8.64141 13.609 9.35508 13.609 9.79453 13.1695L14.2945 8.66953C14.734 8.23008 14.734 7.51641 14.2945 7.07695C13.8551 6.6375 13.1414 6.6375 12.702 7.07695L10.125 9.65742V1.125ZM2.25 12.375C1.00898 12.375 0 13.384 0 14.625V15.75C0 16.991 1.00898 18 2.25 18H15.75C16.991 18 18 16.991 18 15.75V14.625C18 13.384 16.991 12.375 15.75 12.375H12.1816L10.5891 13.9676C9.71016 14.8465 8.28633 14.8465 7.40742 13.9676L5.81836 12.375H2.25ZM15.1875 14.3438C15.4113 14.3438 15.6259 14.4326 15.7841 14.5909C15.9424 14.7491 16.0312 14.9637 16.0312 15.1875C16.0312 15.4113 15.9424 15.6259 15.7841 15.7841C15.6259 15.9424 15.4113 16.0312 15.1875 16.0312C14.9637 16.0312 14.7491 15.9424 14.5909 15.7841C14.4326 15.6259 14.3438 15.4113 14.3438 15.1875C14.3438 14.9637 14.4326 14.7491 14.5909 14.5909C14.7491 14.4326 14.9637 14.3438 15.1875 14.3438Z"
          fill="#9B2033"
        />
      </svg>
      <button className="hover:underline font-semibold">Export Report</button>
    </div>
    <p className="text-xs text-gray-400 mt-1">Complete Report list</p>
  </div>

  <a
    href="/download.csv"
    download
    className="ml-auto text-xs text-red-600 hover:underline font-semibold"
  >
    Download CSV
  </a>
</div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className={`w-10 h-10 rounded-md ${item.iconBg} flex items-center justify-center mr-4`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-[22px] font-bold text-black leading-none">
                  {item.value}
                  <span className="text-green-600 text-sm font-semibold ml-1">{item.change}</span>
                </p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
              <div className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                ▲ {item.percent}
              </div>
            </div>
          ))}
        </div>
   <div className="flex justify-end text-black">
  <p>View All</p>
</div>
         <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-md p-6">
      
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-gray-50 rounded-md p-4 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-500 flex items-center space-x-2">
                  <span>{user.role}</span>
                  <span className="inline-block w-1 h-1 bg-red-600 rounded-full"></span>
                  <span>{user.email}</span>
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-red-800 text-white px-6  py-1 rounded-md hover:bg-red-900 transition">
                Edit
              </button>
              <button className="border border-gray-300 px-4 py-1 rounded-md text-black hover:bg-gray-100 transition">
                Block
              </button>
             <Link href="/participants/SpeakerDetails"><button className="border border-gray-300 px-4 py-1 rounded-md text-black hover:bg-gray-100 transition">
                View
              </button></Link> 
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-red-900 text-white p-4 rounded-lg flex justify-between items-center mb-6">
        <div className=''>
          <p className="mt-2 text-lg font-medium">Networking Requests</p>
          <p className="text-sm text-gray-300">120 Networking Requests</p>
        </div>
        <button className="text-white text-xl"><svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3722 11.4704C30.2093 12.3164 30.2093 13.6904 29.3722 14.5364L18.6573 25.3655C17.8202 26.2115 16.4607 26.2115 15.6236 25.3655C14.7865 24.5195 14.7865 23.1455 15.6236 22.2995L22.6888 15.1658H2.14298C0.957643 15.1658 0 14.198 0 13C0 11.802 0.957643 10.8342 2.14298 10.8342H22.6821L15.6303 3.70051C14.7932 2.85448 14.7932 1.48054 15.6303 0.634518C16.4674 -0.211506 17.8269 -0.211506 18.664 0.634518L29.3789 11.4636L29.3722 11.4704Z" fill="white"/>
</svg>
</button>
      </div>
   <br></br>
    </div>
     <Image src="/images/line.png" alt="Line" width={1450} height={127} className="absolute " />
    
    </div>
  )
}
