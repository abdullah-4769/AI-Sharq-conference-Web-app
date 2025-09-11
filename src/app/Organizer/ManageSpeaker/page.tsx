"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBookmark, FaCalendarAlt, FaRegListAlt, FaSearch } from 'react-icons/fa';
import { FaArrowLeft, FaPlay } from 'react-icons/fa6';
import Image from 'next/image';
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

const filters = ['Daily', 'Weekly', '10 Days', '90 Days', 'All Time'];

const tagColors = {
  "Expert": "bg-blue-100 text-blue-800",
  "Keynote": "bg-green-100 text-green-800",
  "Technology": "bg-purple-100 text-purple-800",
  "Workshop": "bg-pink-100 text-pink-800",
  "Speaker": "bg-red-100 text-red-800"
};

const speakers = [
  {
    name: "Dr. Johnathan",
    title: "Director of Regional Affairs",
    organization: "Middle East Institute",
    Link:"/participants/SpeakerDetails",
    image: "/images/img (13).png",
    tags: ["Expert", "Speaker"],
     sessions: 3,

    description: "Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development."
  },
  {
    name: "Sarah Johnson",
    title: "VP Marketing",
    organization: "Global Corp",
    image: "/images/Sara.png",
    tags: ["Keynote", "Speaker"],
      sessions: 2,

    description: "Sarah Johnson is a VP Marketing at Global Corp with expertise in digital marketing and brand strategy. She has led multiple successful campaigns and has advised startups on scaling their marketing efforts."
  },
  {
    name: "Michael Chen",
    title: "CTO",
    organization: "StartupX",
    image: "/images/img15.jpg",
    tags: ["Technology", "Speaker"],
      sessions: 2,

    description: "Michael Chen is the CTO of StartupX, specializing in AI and machine learning. He has built scalable tech infrastructures for numerous startups and has spoken at major tech conferences worldwide."
  },
  {
    name: "Dr. Emma Wilson",
    title: "Research Director",
    organization: "AI Labs",
    image: "/images/img16.jpg",
    tags: ["Technology", "Speaker"],
      sessions: 4,

    description: "Dr. Emma Wilson is the Research Director at AI Labs, focusing on cutting-edge AI research. She has published numerous papers on machine learning and has collaborated with leading universities on AI ethics."
  },
  {
    name: "David Rodriguez",
    title: "Founder",
    organization: "EcoTech Solutions",
    image: "/images/img17.jpg",
      sessions: 6,

    tags: ["Keynote", "Speaker"],
    description: "David Rodriguez is the Founder of EcoTech Solutions, pioneering sustainable technology solutions. He has developed eco-friendly products and has been recognized for his contributions to green technology."
  },
  {
    name: "Lisa Park",
    title: "Head of Design",
    organization: "Creative Agency",
    image: "/images/img18.jpg",
    tags: ["Workshop", "Speaker"],
      sessions: 2,

    description: "Lisa Park is the Head of Design at Creative Agency, specializing in UX/UI design. She has designed user experiences for major brands and has conducted workshops on design thinking globally."
  }
];
export default function SchedulePage() {
  const [activeFilter, setActiveFilter] = useState('Daily');
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <>
    <div className="min-h-screen font-sans bg-[#FAFAFA] px-4 md:px-10 py-6 space-y-8">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/Organizer/Dashboard">
          <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
        </Link>
        <h1 className="text-xl font-bold text-gray-900 ml-5">Manage Speakers</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center gap-4">
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

      {/* Action Row */}
      <div className="flex justify-between items-center">
        <button className="bg-[#9B2033] hover:bg-[#7c062a] transition text-white text-sm px-5 py-2 rounded-md font-medium"
                  onClick={() => setIsModalOpen(true)}
>
          + Create New Speaker
        </button>
        <button className="text-sm text-gray-600 hover:text-black transition underline font-medium">
          View All
        </button>
      </div>
{/* Speaker Cards */}
<div className="flex flex-col gap-6 px-6 pb-10">
  {speakers.map((speaker, index) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="flex gap-6 items-start justify-between flex-wrap md:flex-nowrap">
        {/* Speaker Info */}
        <div className="flex gap-4">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 shadow-sm"
          />
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2 text-gray-900 font-medium">
              <h2 className="text-lg font-semibold">{speaker.name}</h2>
              <div className="w-1 h-1 bg-red-700 rounded-full" />
              <span>{speaker.title}</span>
              <div className="w-1 h-1 bg-red-700 rounded-full" />
              <span>{speaker.organization}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {speaker.description}
            </p>
          </div>
        </div>

       {/* Tags & Sessions */}
<div className="flex flex-col gap-3 items-end justify-between w-full md:w-auto">
  <div className="flex flex-wrap gap-2 justify-end">
    {speaker.tags
      .filter((tag) => tag !== "Speaker") // ✅ removes "Speaker"
      .map((tag, tagIndex) => (
        <span
          key={tagIndex}
          className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColors[tag as keyof typeof tagColors]}`}
        >
          {tag}
        </span>
      ))}

    {/* ✅ Add Session Badge here */}
    <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
      {speaker.sessions ?? Math.floor(Math.random() * 5) + 1} Sessions
    </span>
  </div>
          {/* Buttons */}
          <div className="flex gap-4 mt-8 md:mt-0">
            <button className="bg-[#9B2033] hover:bg-[#7c062a] transition text-white text-xs px-10 py-2 rounded-md font-medium">
              Edit
            </button>
            <button className="border hover:bg-gray-200 transition text-gray-800 text-xs px-10 py-2 rounded-md font-medium">
              Delete
            </button>
            <Link href={speaker.Link ?? "#"}>
              <button className="border  hover:border-black text-xs px-10 py-2 rounded-md text-gray-800 hover:text-black transition font-medium">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
 <Image src="/images/line.png" alt="Line" width={1450} height={127} className="absolute " />

</div>



 
      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30  z-50"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center px-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-8 shadow-lg relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-700 text-2xl font-bold"
              >
                ✕
              </button>
              <div className="flex justify-center mb-4">
                <Image src="/images/logo.png" alt="Logo" width={160} height={40} />
              </div>
              <h2 className="text-center text-xl font-semibold mb-6 text-gray-800">Add New Speaker</h2>
              <form className="space-y-4 text-sm text-gray-700">
                <div>
                  <label className="block font-medium mb-1">Full Name<span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter a speaker name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Speaker Email<span className="text-red-500">*</span></label>
                  <input type="email" placeholder="name@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Set Password<span className="text-red-500">*</span></label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Confirm Password<span className="text-red-500">*</span></label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Organization / Affiliation*</label>
                  <input type="text" placeholder="e.g. University of Sharjah" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Role/Designation*</label>
                  <input type="text" placeholder="e.g. University of Sharjah" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
               <div>
                  <label className="block font-medium mb-1">Linked Session*</label>
                  <input type="text" placeholder="e.g. University of Sharjah" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
                <div>
                    <div>
                  <label className="block font-medium mb-1">Website</label>
                  <input type="text" placeholder="e.g. University of Sharjah" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div><br></br>
                  <label className="block font-medium mb-1">Biography</label>
                  <textarea placeholder="Describe your topic in detail" className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Specialty</label>
                 
                  <input type="text" placeholder="Add specialty tags" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]" />
                
                
                </div>
                 <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">Innovation</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Sustainability</span>
                  </div>
                <button type="submit" className="w-full bg-[#9B2033] text-white px-4 py-2 rounded-md font-medium mt-4 hover:bg-[#7a1029] transition">
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </>
      )}
</>
  );
}
