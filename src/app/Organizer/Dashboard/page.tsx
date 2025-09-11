"use client";

import React, { useState } from "react";
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
import { FaArrowDown } from "react-icons/fa6";
import Image from "next/image";

const filters = ["Daily", "Weekly", "10 Days", "90 Days", "All Time"];

const quickAccessItems = [
  {
    label: "Manage Participants",
    desc: "Directory & search",
    img: "/images/Particpants.png",
    Link: "/Organizer/ManageParticipants",
  },
  {
    label: "Manage Sessions",
    desc: "Create & edit sessions",
    img: "/images/div2.png",
    Link: "/Organizer/ManageSessions",
  },
  {
    label: "Manage Speakers",
    desc: "Update profiles & bios",
    img: "/images/div3.png",
    Link: "/Organizer/ManageSpeaker",
  },
  {
    label: "Sponsors",
    desc: "Manage exhibitors",
    img: "/images/div4.png",
    Link: "/Organizer/ManageSponsor",
  },
  {
    label: "Venue Maps",
    desc: "Upload & update maps",
    img: "/images/div5.png",
    Link: "/Organizer/VenueMaps",
  },
  {
    label: "Announcement",
    desc: "Send Updates",
    img: "/images/div6.png",
    Link: "/Organizer/ManageAnnouncements",
  },
];


const stats = [
  { label: "Total Registrations", value: "1,250", percent: "2.3%", change: "+30", icon: <FaUserPlus className="text-blue-500 text-xl" /> },
  { label: "Checked In Today", value: "830", percent: "1.5%", change: "+12", icon: <FaCheckCircle className="text-green-500 text-xl" /> },
  { label: "Active Sessions", value: "5", percent: "0.5%", change: "+1", icon: <FaTv className="text-purple-500 text-xl" /> },
  { label: "Total Speakers", value: "205", percent: "3.0%", change: "+7", icon: <FaMicrophone className="text-red-500 text-xl" /> },
  { label: "Total Sponsors", value: "455", percent: "4.2%", change: "+20", icon: <FaHandshake className="text-yellow-500 text-xl" /> },
  { label: "Total Participants", value: "1,850", percent: "2.8%", change: "+40", icon: <FaUsers className="text-orange-500 text-xl" /> },
];
// Sample participants data with image URLs
const participants = [
  {
    name: "Dr. Johnathan",
    role: "Director of Regional Affairs",
    email: "johnathan@gmail.com",
    img: "/images/Dr.jpg",  // replace with your actual image path
  },
  {
    name: "Sarah Mitchell",
    role: "Innovation Labs",
    email: "sarah@gmail.com",
    img: "/images/img (7).png",  // replace with your actual image path
  },
  {
    name: "Emily Torres",
    role: "Design Gurus",
    email: "emily@gmail.com",
    img: "/images/emily.png",
  },
  {
    name: "Michael Chen",
    role: "Data Analytics Team",
    email: "michael.chen@gmail.com",
    img: "/images/img (8).png",  // replace with your actual image path
  },
  {
    name: "Ava Robinson",
    role: "User Experience Research",
    email: "ava.robinson@gmail.com",
    img: "/images/Ava.jpg",
  },
]

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState("Daily");
  return (
    <div className="p-6 space-y-8 bg-[#F9F9F9] min-h-screen">
      
      {/* Top Bar */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        <div className="flex bg-white border border-gray-300 rounded-md px-3 py-2 w-full md:w-[300px]">
          <FaSearch className="text-red-900 mr-2" />
          <input type="text" placeholder="Search" className="outline-none text-sm w-full" />
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)}
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
          {/* Paste the SVG icon here */}
          <svg width="64" height="44" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="63" height="43" rx="9.5" stroke="#E8E8E8"/>
<path d="M41.25 21.9999H28.895M24.534 21.9999H22.75M24.534 21.9999C24.534 21.4217 24.7637 20.8672 25.1725 20.4584C25.5813 20.0496 26.1358 19.8199 26.714 19.8199C27.2922 19.8199 27.8467 20.0496 28.2555 20.4584C28.6643 20.8672 28.894 21.4217 28.894 21.9999C28.894 22.5781 28.6643 23.1326 28.2555 23.5414C27.8467 23.9502 27.2922 24.1799 26.714 24.1799C26.1358 24.1799 25.5813 23.9502 25.1725 23.5414C24.7637 23.1326 24.534 22.5781 24.534 21.9999ZM41.25 28.6069H35.502M35.502 28.6069C35.502 29.1852 35.2718 29.7403 34.8628 30.1492C34.4539 30.5582 33.8993 30.7879 33.321 30.7879C32.7428 30.7879 32.1883 30.5572 31.7795 30.1484C31.3707 29.7396 31.141 29.1851 31.141 28.6069M35.502 28.6069C35.502 28.0286 35.2718 27.4745 34.8628 27.0655C34.4539 26.6566 33.8993 26.4269 33.321 26.4269C32.7428 26.4269 32.1883 26.6566 31.7795 27.0654C31.3707 27.4742 31.141 28.0287 31.141 28.6069M31.141 28.6069H22.75M41.25 15.3929H38.145M33.784 15.3929H22.75M33.784 15.3929C33.784 14.8147 34.0137 14.2602 34.4225 13.8514C34.8313 13.4426 35.3858 13.2129 35.964 13.2129C36.2503 13.2129 36.5338 13.2693 36.7983 13.3788C37.0627 13.4884 37.3031 13.649 37.5055 13.8514C37.7079 14.0538 37.8685 14.2942 37.9781 14.5586C38.0876 14.8231 38.144 15.1066 38.144 15.3929C38.144 15.6792 38.0876 15.9627 37.9781 16.2271C37.8685 16.4916 37.7079 16.732 37.5055 16.9344C37.3031 17.1368 37.0627 17.2974 36.7983 17.4069C36.5338 17.5165 36.2503 17.5729 35.964 17.5729C35.3858 17.5729 34.8313 17.3432 34.4225 16.9344C34.0137 16.5256 33.784 15.9711 33.784 15.3929Z" stroke="#9B2033" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-9">
        {stats.map((item, idx) => (
          <div key={idx} className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center">{item.icon}</div>
              <div className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                ▲ {item.percent}
              </div>
            </div>
            <p className="text-[22px] font-bold text-black mb-1">
              {item.value} <span className="text-green-600 text-sm font-semibold">{item.change}</span>
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
      <img src={item.img} alt={item.label} className="w-10 h-10 mb-2" />
      <p className="font-semibold text-black text-sm">{item.label}</p>
      <p className="text-xs text-gray-500">{item.desc}</p>
    </div>
  </Link>
))}

        </div>
      </section>
      {/* Tools & Support */}
<section className="bg-white p-6 rounded-xl shadow">
  <h2 className="text-xl font-semibold mb-6 text-black">Tools & Support</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Box 1 */}
    <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-md">
          <img src="/images/qr.png" alt="QR Scanner" className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-black text-sm">QR Scanner</p>
          <p className="text-xs text-gray-500">Validate check-ins</p>
        </div>
      </div>
      <span className="text-[#9B2033] text-lg font-bold"><Link href="/Organizer/Dashboard"><FaArrowRight></FaArrowRight></Link></span>
    </div>

    {/* Box 2 */}
    <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="bg-[#E3FFF7] p-2 rounded-md">
          <img src="/images/reports.png" alt="Reports" className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-black text-sm">Reports</p>
          <p className="text-xs text-gray-500">Analytics & exports</p>
        </div>
      </div>
      <span className="text-[#9B2033] text-lg font-bold"><Link href="/Organizer/Report"><FaArrowRight></FaArrowRight></Link></span>
    </div>

    {/* Box 3 */}
    <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="bg-[#FFF3F3] p-2 rounded-md">
          <img src="/images/Faqs.png" alt="Manage FAQ" className="w-10 h-10" />
        </div>
        <div>
          <p className="font-semibold text-black text-sm">Manage FAQ</p>
          <p className="text-xs text-gray-500">Help & guidance</p>
        </div>
      </div>
      <span className="text-[#9B2033] text-lg font-bold"><Link href="/Organizer/Dashboard"><FaArrowRight></FaArrowRight></Link></span>
    </div>
  </div>
</section>
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
            className="flex items-center space-x-4 border border-gray-200 rounded-lg p-3"
          >
            <img
              src={participant.img}
              alt={participant.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full text-sm text-gray-700">
              <p className="font-semibold text-black">{participant.name}</p>
              <span className="mx-2 hidden sm:inline-block text-red-600 font-bold">•</span>
              <p>{participant.role}</p>
              <span className="mx-2 hidden sm:inline-block text-red-600 font-bold">•</span>
              <p>{participant.email}</p>
            </div>
          </div>
        ))}
      </div>

    
    </section>
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
      <Image src="/images/line.png" alt="Logo" width={1460} height={127} className="absolute top-[1900px]" />

    </div>
  );
}