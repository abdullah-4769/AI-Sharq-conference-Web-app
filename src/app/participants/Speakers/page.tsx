"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowLeft, FaFilter, FaSearch } from 'react-icons/fa';

const speakers = [
  {
    name: "Dr. Johnathan",
    title: "Director of Regional Affairs",
    organization: "Middle East Institute",
    Link:"/participants/SpeakerDetails",
    image: "/images/img (13).png",
    tags: ["Expert", "Speaker"],
    description: "Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development."
  },
  {
    name: "Sarah Johnson",
    title: "VP Marketing",
    organization: "Global Corp",
    image: "/images/SarahJohnson.png",
    tags: ["Keynote", "Speaker"],
    description: "Sarah Johnson is a VP Marketing at Global Corp with expertise in digital marketing and brand strategy. She has led multiple successful campaigns and has advised startups on scaling their marketing efforts."
  },
  {
    name: "Michael Chen",
    title: "CTO",
    organization: "StartupX",
    image: "/images/MichaelChen.png",
    tags: ["Technology", "Speaker"],
    description: "Michael Chen is the CTO of StartupX, specializing in AI and machine learning. He has built scalable tech infrastructures for numerous startups and has spoken at major tech conferences worldwide."
  },
  {
    name: "Dr. Emma Wilson",
    title: "Research Director",
    organization: "AI Labs",
    image: "/images/DrEmmaWilson.png",
    tags: ["Technology", "Speaker"],
    description: "Dr. Emma Wilson is the Research Director at AI Labs, focusing on cutting-edge AI research. She has published numerous papers on machine learning and has collaborated with leading universities on AI ethics."
  },
  {
    name: "David Rodriguez",
    title: "Founder",
    organization: "EcoTech Solutions",
    image: "/images/DavidRodriguez.png",
    tags: ["Keynote", "Speaker"],
    description: "David Rodriguez is the Founder of EcoTech Solutions, pioneering sustainable technology solutions. He has developed eco-friendly products and has been recognized for his contributions to green technology."
  },
  {
    name: "Lisa Park",
    title: "Head of Design",
    organization: "Creative Agency",
    image: "/images/LisaPark.png",
    tags: ["Workshop", "Speaker"],
    description: "Lisa Park is the Head of Design at Creative Agency, specializing in UX/UI design. She has designed user experiences for major brands and has conducted workshops on design thinking globally."
  }
];

const tagColors = {
  "Expert": "bg-blue-200 text-blue-800",
  "Keynote": "bg-green-200 text-green-800",
  "Technology": "bg-purple-200 text-purple-800",
  "Workshop": "bg-pink-200 text-pink-800",
  "Speaker": "bg-red-200 text-red-800"
};

export default function SpeakersPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSpeakers = activeFilter === "All"
    ? speakers
    : speakers.filter(speaker => speaker.tags.includes(activeFilter));

  return (
    <div className="flex flex-col gap-10 p-5 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-10">
  <Link href="/participants/Home">
    <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
  </Link>
  <h1 className="text-2xl font-medium text-gray-900">Speakers</h1>
</div>

      {/* Search and Filters */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 w-1/2">
         <FaSearch className='text-red-500 w-[20px] h-[20px]'/>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-gray-400"
          />
        </div>
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-6 py-3 rounded-lg font-bold ${
            activeFilter === "All"
              ? "bg-red-700 text-white"
              : "border border-gray-300 text-gray-900"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("Expert")}
          className={`px-6 py-3 rounded-lg ${
            activeFilter === "Expert"
              ? "bg-red-700 text-white font-bold"
              : "border border-gray-300 text-gray-900"
          }`}
        >
          Expert
        </button>
        <button
          onClick={() => setActiveFilter("Keynote")}
          className={`px-6 py-3 rounded-lg ${
            activeFilter === "Keynote"
              ? "bg-red-700 text-white font-bold"
              : "border border-gray-300 text-gray-900"
          }`}
        >
          Keynote
        </button>
        <button
          onClick={() => setActiveFilter("Technology")}
          className={`px-6 py-3 rounded-lg ${
            activeFilter === "Technology"
              ? "bg-red-700 text-white font-bold"
              : "border border-gray-300 text-gray-900"
          }`}
        >
        Technology
        </button>
        <button
          onClick={() => setActiveFilter("Workshop")}
          className={`px-6 py-3 rounded-lg ${
            activeFilter === "Workshop"
              ? "bg-red-700 text-white font-bold"
              : "border border-gray-300 text-gray-900"
          }`}
        >
          Workshop
        </button>
        <div className="border border-gray-300 rounded-lg p-3">
         <FaFilter className='text-red-500 w-[20px]' />
        </div>
      </div>

      {/* Speakers Count */}
      <p className="text-lg font-medium text-gray-900">{filteredSpeakers.length} Speakers Showing</p>

      {/* Speakers List */}
     
<div className="flex flex-col gap-6">
  {filteredSpeakers.map((speaker, index) => (
<Link key={index} href={speaker.Link ?? '#'} className="block">
      <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="flex gap-6">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <h2 className="text-xl font-semibold text-gray-900">{speaker.name}</h2>
              <div className="w-1 h-1 bg-red-700 rounded-full" />
              <p className="text-base text-gray-900">{speaker.title}</p>
              <div className="w-1 h-1 bg-red-700 rounded-full" />
              <p className="text-base text-gray-900">{speaker.organization}</p>

             <div className="ml-auto flex gap-2 flex-wrap">
    {speaker.tags.map((tag, tagIndex) => (
      <span
        key={tagIndex}
        className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors[tag as keyof typeof tagColors]}`}
      >
        {tag}
      </span>
    ))}
    </div>

              <div className="bg-red-200 p-2 rounded-full">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{speaker.description}</p>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
}
