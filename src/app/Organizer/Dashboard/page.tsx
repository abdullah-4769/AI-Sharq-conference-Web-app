"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaHandshake,
  FaMicrophone,
  FaSearch,
  FaTv,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import TodaysSchedule from "@/app/components/TodaysSchedule";
import Link from "next/link";

const filters = ["Daily", "Weekly", "10 Days", "90 Days", "All Time"];

const quickAccessItems = [
  {
    label: "Manage Participants",
    desc: "Directory & search",
    Image: "/Images/div2.png",
    Link: "/Organizer/ManageParticipants",
  },
  {
    label: "Manage Sessions",
    desc: "Create & edit sessions",
    Image: "/Images/div2.png",
    Link: "/Organizer/ManageSessions",
  },
  {
    label: "Manage Speakers",
    desc: "Update profiles & bios",
    Image: "/Images/div3.png",
    Link: "/Organizer/ManageSpeaker",
  },
  {
    label: "Sponsors",
    desc: "Manage exhibitors",
    Image: "/Images/div4.png",
    Link: "/Organizer/ManageSponsor",
  },
  {
    label: "Venue Maps",
    desc: "Upload & update maps",
    Image: "/Images/div5.png",
    Link: "/Organizer/VenueMaps",
  },
  {
    label: "Announcement",
    desc: "Send Updates",
    Image: "/Images/div6.png",
    Link: "/Organizer/ManageAnnouncements",
  },
];

const stats = [
  {
    label: "Total Registrations",
    value: "1,250",
    percent: "2.3%",
    change: "+30",
    icon: <FaUserPlus className="text-blue-500 text-xl" />,
  },
  {
    label: "Checked In Today",
    value: "830",
    percent: "1.5%",
    change: "+12",
    icon: <FaCheckCircle className="text-green-500 text-xl" />,
  },
  {
    label: "Active Sessions",
    value: "5",
    percent: "0.5%",
    change: "+1",
    icon: <FaTv className="text-purple-500 text-xl" />,
  },
  {
    label: "Total Speakers",
    value: "205",
    percent: "3.0%",
    change: "+7",
    icon: <FaMicrophone className="text-red-500 text-xl" />,
  },
  {
    label: "Total Sponsors",
    value: "455",
    percent: "4.2%",
    change: "+20",
    icon: <FaHandshake className="text-yellow-500 text-xl" />,
  },
  {
    label: "Total Participants",
    value: "1,850",
    percent: "2.8%",
    change: "+40",
    icon: <FaUsers className="text-orange-500 text-xl" />,
  },
];

const participants = [
  {
    name: "Dr. Johnathan",
    role: "Director of Regional Affairs",
    email: "johnathan@gmail.com",
    Image: "/Images/img (13).png",
  },
  {
    name: "Sarah Mitchell",
    role: "Innovation Labs",
    email: "sarah@gmail.com",
    Image: "/Images/img (7).png",
  },
  {
    name: "Emily Torres",
    role: "Design Gurus",
    email: "emily@gmail.com",
    Image: "/Images/emily.png",
  },
  {
    name: "Michael Chen",
    role: "Data Analytics Team",
    email: "michael.chen@gmail.com",
    Image: "/Images/img (8).png",
  },
  {
    name: "Ava Robinson",
    role: "User Experience Research",
    email: "ava.robinson@gmail.com",
    Image: "/Images/Ava.jpg",
  },
];

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState("Daily");

  return (
    <div className="p-2 space-y-8 bg-[#F9F9F9] min-h-screen">
      {/* Top Bar */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        <div className="flex bg-white border border-gray-300 rounded-md px-3 py-2 w-full md:w-[300px]">
          <FaSearch className="text-red-900 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm w-full"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1 rounded-xl text-sm font-medium ${
                activeFilter === filter
                  ? "bg-[#86002B] text-white"
                  : "bg-white border border-gray-300 text-black"
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
        <div className="text-gray-600 text-xl cursor-pointer hover:text-gray-800">
          {/* Icon */}
          <svg
            width="64"
            height="44"
            viewBox="0 0 64 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="63"
              height="43"
              rx="9.5"
              stroke="#E8E8E8"
            />
            <path
              d="M41.25 21.9999H28.895M24.534 21.9999H22.75M24.534 21.9999C24.534 21.4217..."
              stroke="#9B2033"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-9">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                ▲ {item.percent}
              </div>
            </div>
            <p className="text-[22px] font-bold text-black mb-1">
              {item.value}{" "}
              <span className="text-green-600 text-sm font-semibold">
                {item.change}
              </span>
            </p>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      <TodaysSchedule />

      {/* Quick Access */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-black">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {quickAccessItems.map((item) => (
            <Link href={item.Link} key={item.label}>
              <div className="flex flex-col items-center text-center bg-white border border-gray-300 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
                <Image
                  src={item.Image}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <p className="font-semibold text-black text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools & Support */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-black">
          Tools & Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Box 1 */}
          <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2 rounded-md">
                <Image
                  src="/Images/qr.png"
                  alt="QR Scanner"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="font-semibold text-black text-sm">QR Scanner</p>
                <p className="text-xs text-gray-500">Validate check-ins</p>
              </div>
            </div>
            <span className="text-[#9B2033] text-lg font-bold">
              <Link href="/Organizer/Dashboard">
                <FaArrowRight />
              </Link>
            </span>
          </div>

          {/* Box 2 */}
          <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="bg-[#E3FFF7] p-2 rounded-md">
                <Image
                  src="/Images/reports.png"
                  alt="Reports"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="font-semibold text-black text-sm">Reports</p>
                <p className="text-xs text-gray-500">Analytics & exports</p>
              </div>
            </div>
            <span className="text-[#9B2033] text-lg font-bold">
              <Link href="/Organizer/Report">
                <FaArrowRight />
              </Link>
            </span>
          </div>

          {/* Box 3 */}
          <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFF3F3] p-2 rounded-md">
                <Image
                  src="/Images/Faqs.png"
                  alt="Manage FAQ"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="font-semibold text-black text-sm">Manage FAQ</p>
                <p className="text-xs text-gray-500">Help & guidance</p>
              </div>
            </div>
            <span className="text-[#9B2033] text-lg font-bold">
              <Link href="/Organizer/Dashboard">
                <FaArrowRight />
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* Recent Participants */}
      <div className="flex justify-between items-center mb-4 ml-10">
        <h2 className="text-lg font-semibold text-black">Recent Participants</h2>
        <a href="#" className="text-sm text-gray-600 hover:underline">
          View All
        </a>
      </div>

      <section className="p-6 bg-white rounded-xl shadow-sm max-w-8xl mx-auto">
        <div className="space-y-3">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 border border-gray-200 rounded-full p-3"
            >
              <Image
                src={participant.Image}
                alt={participant.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full text-sm text-gray-700">
                <p className="font-semibold text-black">{participant.name}</p>
                <span className="mx-2 hidden sm:inline-block text-red-600 font-bold">
                  •
                </span>
                <p>{participant.role}</p>
                <span className="mx-2 hidden sm:inline-block text-red-600 font-bold">
                  •
                </span>
                <p>{participant.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Export Section */}
      <div className="flex items-center border border-gray-200 rounded-lg p-4 bg-white max-w-8xl mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 text-red-800 text-sm cursor-pointer">
            <button className="hover:underline font-semibold">
              Export Report
            </button>
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

      <Image
        src="/Images/line.png"
        alt="line"
        width={1320}
        height={127}
        className="absolute top-[1900px]"
      />
    </div>
  );
}
