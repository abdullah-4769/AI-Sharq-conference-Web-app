'use client';

import React, { useState } from 'react';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

interface NetworkingUser {
  id: number;
  name: string;
  title: string;
  company: string;
  description: string;
  image: string;
  gender: 'Male' | 'Female';
  isConnected: boolean;
}

const Networking: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<NetworkingUser[]>([
    {
      id: 1,
      name: 'Dr. Johnathan',
      title: 'Director of Regional Affairs',
      company: 'Middle East Institute',
      description: 'Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      image: '/images/drAhmad.jpg',
      gender: 'Female',
      isConnected: false
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'VP Marketing',
      company: 'Global Corp',
      description: 'Sarah Johnson is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      image: '/images/Sara.png',
      gender: 'Female',
      isConnected: false
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'CTO',
      company: 'StartupX',
      description: 'Michael Chen is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      image: '/images/Daniel.png',
      gender: 'Male',
      isConnected: false
    },
    {
      id: 4,
      name: 'Dr. Emma Wilson',
      title: 'Research Director',
      company: 'AI Labs',
      description: 'Dr. Emma Wilson is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      image: '/images/Emily.png',
      gender: 'Female',
      isConnected: false
    },
    {
      id: 5,
      name: 'David Rodriguez',
      title: 'Founder',
      company: 'EcoTech Solutions',
      description: 'David Rodriguez is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      image: '/images/Ahmed.png',
      gender: 'Male',
      isConnected: false
    },
    {
      id: 6,
      name: 'Lisa Park',
      title: 'Head of Design',
      company: 'Creative Agency',
      description: 'Lisa Park is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.',
      image: '/images/Jerrin.png',
      gender: 'Female',
      isConnected: false
    }
  ]);


  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full h-screen">
      {/* Main Container */}
      <div className="absolute flex flex-col items-end p-0 gap-10 w-[1280px] h-[1367px] left-[80px] top-[30px]">

        {/* Header Section */}
        <div className="box-border flex flex-col items-start p-6 gap-6 w-[1280px] h-24 bg-[#FFEEEE] border border-[#D4D4D4] shadow-sm rounded-3xl">
          <div className="flex flex-col items-start p-0 gap-4 w-[1216px] h-12">
            <div className="flex flex-row items-center p-0 gap-4 w-[1216px] h-12">
              <div className="flex flex-col items-start p-0 gap-4 w-[1169px] h-12">
                <div className="flex flex-row items-center p-0 gap-3 w-[1169px] h-12">
                  <div className="w-12 h-12 bg-[#FFBEBE] rounded-lg flex items-center justify-center">
                    <FaMessage className="text-[#9B2033] text-xl" />
                  </div>
                  <div className="flex flex-col items-start p-0 gap-4 w-[1107px] h-8">
                    <h2 className="text-lg font-semibold text-[#9B2033]">Chats List</h2>
                  </div>
                
<Link href="/participants/Masseges">
  <FaArrowRight className="text-[#9B2033] text-2xl ml-auto" />
</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-row items-center p-0 gap-10 w-[1280px] h-6">
          <Link href="/participants/Home"> <FaArrowLeft className="text-[#9B2033] text-2xl" /></Link>
         
          <h1 className="text-2xl font-medium text-[#282828]">Networking</h1>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-row items-center p-0 gap-4 w-[1280px] h-11">
          <Link href="/participants/Networking">
          <button className="box-border flex flex-col justify-center items-center p-4 gap-3 w-80 h-11 border text-black border-[#E8E8E8] rounded-xl">
         Directory
          </button></Link>
            
            <Link href="/participants/MyConnections">
            <button className="box-border flex flex-col justify-center items-center p-4 gap-3 w-80 h-11 bg-[#9B2033] border border-[#9B2033] rounded-xl">
                 <span className="text-bold font-bold text-[#f0e5e5]">My Connections</span>
          </button>
         </Link>
          <div className="box-border flex flex-row justify-center items-center p-4 gap-3 w-[628px] h-11 border border-[#E8E8E8] rounded-xl">
            <FaSearch className="text-[#9B2033] text-xl" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-base text-[#575454] border-none outline-none"
            />
          </div>
        </div>

        {/* Participants Count */}
        <div className="text-base font-medium text-[#282828]">
          {filteredUsers.length} Participants Showing
        </div>

        {/* Networking Cards Container */}
        <div className="flex flex-col items-start p-0 gap-6 w-[1280px] h-[1038px]">
          {filteredUsers.map((user) => (
            <div key={user.id} className="box-border flex flex-col items-start p-6 gap-6 w-[1280px] h-40 bg-white border border-[#D4D4D4] shadow-sm rounded-3xl">
              <div className="flex flex-row items-start p-0 gap-8 w-[1216px] h-24">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex flex-col justify-center items-start p-0 gap-6 w-[1087px] h-20">
                  <div className="flex flex-row items-center p-0 gap-3 w-[1087px] h-8">
                    <h3 className="text-lg font-semibold text-[#282828]">{user.name}</h3>
                    <div className="w-1 h-1 bg-[#9B2033] rounded-full"></div>
                    <span className="text-base text-[#282828]">{user.title}</span>
                    <div className="w-1 h-1 bg-[#9B2033] rounded-full"></div>
                    <span className="text-base text-[#282828]">{user.company}</span>
                    <button
                    
                      className="flex flex-row absolute left-[1050px] p-3 gap-3 rounded-full text-md font-bold text-green-500 border border-green-500"
                      
                    >
                    Connected
                    </button>
                    <Image src="/images/chat.png" alt="Chat" width={34} height={34} className="absolute left-[1190px]" />
                  </div>
                  <p className="text-sm text-[#424242] leading-5 w-[1087px] h-8">
                    {user.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[1510px]" />
    </div>
  );
};

export default Networking;
