"use client"
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaSearch, FaCalendarAlt, FaPlay, FaRegListAlt } from 'react-icons/fa';
import DiscoverMoreSessions from '../../components/DiscoverMoreSessions';
import { FaBookmark } from 'react-icons/fa6';

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

export default function SessionsSchedule() {
  const [activeFilter, setActiveFilter] = useState('Daily');
const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-6 md:p-10 min-h-screen font-sans bg-[#FAFAFA]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/Organizer/Dashboard">
            <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900 ml-5" >Sessions Schedule</h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          {/* Search */}
          <div className="flex bg-white border border-gray-300 rounded-md px-3 py-2 w-full md:w-[300px]">
            <FaSearch className="text-red-900 mr-2 mt-1" />
            <input
              type="text"
              placeholder="Search sessions or speakers"
              className="outline-none text-sm w-full"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  activeFilter === filter
                    ? 'bg-[#86002B] text-white'
                    : 'bg-white border border-gray-300 text-gray-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Date Range */}
          <div className="flex items-center border border-gray-300 bg-white px-3 py-2 rounded-md text-sm text-gray-700">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            Jan 2024 - Dec 2024
          </div>
        </div>


  <div className="px-6 md:px-10 py-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-md ${item.iconBg} flex items-center justify-center mr-4`}
            >
              {item.icon}
            </div>

            {/* Value + Label */}
            <div className="flex-1">
              <p className="text-[22px] font-bold text-black leading-none">
                {item.value}
                <span className="text-green-600 text-sm font-semibold ml-1">
                  {item.change}
                </span>
              </p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>

            {/* Percent Change */}
            <div className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
              ▲ {item.percent}
            </div>
          </div>
        ))}
      </div>

      {/* Action Row */}
      <div className="flex justify-between items-center">
        <button className="bg-[#9B2033] hover:bg-[#7c062a] transition text-white text-sm px-5 py-2 rounded-md font-medium"
          onClick={() => setIsModalOpen(true)}
>
          + Create New Schedule
        </button>

        <button className="text-sm text-gray-600 hover:text-black transition underline font-medium">
          View All
        </button>
      </div>

      {/* Date Heading */}
      <h3 className="text-sm text-gray-600 font-medium">
        Monday, Feb 19, 2025
      </h3>
    </div>





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
      
<div className="flex items-center gap-3 mt-4">
  {/* Edit Button */}
  <button className="bg-[#9B2033] hover:bg-[#7c062a] transition text-white text-sm px-4 py-2 rounded-md w-full">
    Edit
  </button>

  {/* Delete Button */}
  <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm px-4 py-2 rounded-md w-full">
    Delete
  </button>

  {/* View Button */}
  <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm px-4 py-2 rounded-md w-full">
    View
  </button>
</div>

          

        </div>
      ))}
    </div>
    </div>


      {/* Bottom Line Image */}
      <Image
        src="/images/line.png"
        alt="Line Decoration"
        width={1729}
        height={127}
        className="w-full mt-16"
      />
   {isModalOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/60  z-[9998]"
      onClick={() => setIsModalOpen(false)}
    ></div>

    {/* Modal Content */}
    <div className="fixed inset-0 flex items-center justify-center px-4 z-[9999]">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-lg relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-700 text-2xl font-bold"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <Image src="/images/logo1.png" alt="Conference Logo" width={160} height={40} />
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
          Add New Session
        </h2>

        {/* Form */}
        <form className="space-y-4 text-sm text-gray-700">
          <div>
            <label className="block font-medium mb-1">Session Title<span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter a clear title" className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
          </div>

          <div>
            <label className="block font-medium mb-1">Category<span className="text-red-500">*</span></label>
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]">
              <option>General Discussion</option>
              <option>Workshop</option>
              <option>Keynote</option>
            </select>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium mb-1">Start Date<span className="text-red-500">*</span></label>
              <input type="date" className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1">End Date<span className="text-red-500">*</span></label>
              <input type="date" className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Speaker<span className="text-red-500">*</span></label>
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]">
              <option>Michael Lee</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Sponsor<span className="text-red-500">*</span></label>
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]">
              <option>Grand Convention Center</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Location<span className="text-red-500">*</span></label>
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]">
              <option>Online</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              placeholder="Describe your topic in detail"
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Tags</label>
            <div className="flex gap-2 mb-2">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                Innovation
              </span>
              <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">
                Sustainability
              </span>
            </div>
            <input type="text" placeholder="Add tag" className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
          </div>

          <button
            type="submit"
            className="w-full bg-[#9B2033] hover:bg-[#7c062a] text-white text-sm font-medium py-2 rounded-md transition"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  </>
)}




    </>
  );
}
