"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaSearch,
  FaCalendarAlt,
  FaRegListAlt,
  FaPlay,
  FaBookmark,
  FaCrown,
  FaMedal,
} from "react-icons/fa";

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

const goldSponsors = [
  { id: "1", name: "TechCorp", description: "Leading provider of enterprise software." },
  { id: "2", name: "InnovateX", description: "Pioneering digital transformation." },
];

const silverSponsors = [
  {
    id: "1",
    name: "DataFlow Systems",
    description: "Provider of digital solutions and services.",
  },
  {
    id: "2",
    name: "SecureNet Technologies",
    description: "Specializes in AI and business automation.",
  },
];

const getBadgeGradient = (tier: "gold" | "silver", index: number) => {
  const gradients = {
    gold: [
      "bg-gradient-to-r from-blue-500 to-blue-600",
      "bg-gradient-to-r from-purple-500 to-purple-600",
      "bg-gradient-to-r from-cyan-500 to-blue-500",
    ],
    silver: [
      "bg-gradient-to-r from-purple-500 to-purple-600",
      "bg-gradient-to-r from-red-500 to-red-600",
      "bg-gradient-to-r from-pink-500 to-pink-600",
    ],
  };
  return gradients[tier][index % gradients[tier].length];
};

const SponsorCard = ({
  sponsor,
  index,
  tier,
}: {
  sponsor: { id: string; name: string; description: string };
  index: number;
  tier: "gold" | "silver";
}) => {
  const badgeColor = getBadgeGradient(tier, index);
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm flex items-center gap-6">
      <div className={`w-24 h-24 ${badgeColor} rounded-full flex items-center justify-center`}>
        <span className="text-white font-bold text-2xl">{sponsor.name.charAt(0)}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-black">
          {sponsor.name} {tier === "gold" ? "Solutions" : "Inc."}
        </h3>
        <p className="text-black mb-4">{sponsor.description}</p>
        <div className="flex items-center gap-4">
          <Link href="/participants/SponsorsDetailsScreen">
            <button className="bg-[#9B2033] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#7b1a2c] transition">
              Visit Booth
            </button>
          </Link>
          <Link href="/participants/SponsorsDetailsScreen">
            <button className="border border-gray-300 text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("Daily");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#FAFAFA] px-4 md:px-10 py-6 space-y-8 relative">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Link href="/participants/Home">
            <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900 ml-5">Manage Sponsor</h1>
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
          <button
            className="bg-[#9B2033] hover:bg-[#7c062a] transition text-white text-sm px-5 py-2 rounded-md font-medium"
            onClick={() => setIsModalOpen(true)}
          >
            + Create New Sponsor
          </button>
          <button className="text-sm text-gray-600 hover:text-black transition underline font-medium">
            View All
          </button>
        </div>

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaCrown className="text-yellow-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-black">Gold Sponsors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goldSponsors.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} tier="gold" />
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FaMedal className="text-gray-400 w-6 h-6" />
              <h2 className="text-2xl font-bold text-black">Silver Sponsors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {silverSponsors.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} tier="silver" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL SECTION */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur- z-40"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg max-w-md w-full p-8 shadow-lg relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-700 text-2xl font-bold"
              >
                ✕
              </button>
              <div className="flex justify-center mb-4">
                <Image src="/images/logo1.png" alt="Logo" width={160} height={40} />
              </div>
              <h2 className="text-center text-xl font-semibold mb-6 text-gray-800">
                Add New Sponsor
              </h2>
              <form className="space-y-4 text-sm text-gray-700">
                <Input label="Sponsor Name" required />
                <Input label="Sponsor Email" required type="email" />
                <Input label="Industry / Focus*" required type="password" />
                <Input label="Set Password" required type="password" />
                <Input label="Confirm Password" required />
                <Input label="Linked Booth / Exhibitor* (Only for Physical Session)" required />
                <Input label="Website" />
                <Textarea label="Description" />
                <Input label="Specialty Tags" />
                <div className="flex gap-2 flex-wrap">
                  <Tag label="Innovation" color="yellow" />
                  <Tag label="Sustainability" color="green" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#9B2033] text-white px-4 py-2 rounded-md font-medium mt-4 hover:bg-[#7a1029] transition"
                >
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

const Input = ({
  label,
  required,
  type = "text",
}: {
  label: string;
  required?: boolean;
  type?: string;
}) => (
  <div>
    <label className="block font-medium mb-1">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]"
    />
  </div>
);

const Textarea = ({ label }: { label: string }) => (
  <div>
    <label className="block font-medium mb-1">{label}</label>
    <textarea
      placeholder={`Enter ${label.toLowerCase()}`}
      className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#9B2033] focus:border-[#9B2033]"
    />
  </div>
);

const Tag = ({ label, color }: { label: string; color: string }) => {
  const bg = {
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
  }[color];
  return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${bg}`}>{label}</span>;
};
