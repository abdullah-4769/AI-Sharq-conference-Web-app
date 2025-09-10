// app/page.tsx (Next.js 13+ with App Router) or pages/index.js for older version
'use client';

import React from 'react';
import { FaCalendarAlt, FaUserTie, FaHandshake, FaComments, FaUsers, FaRegCalendarCheck } from 'react-icons/fa';
import TodaysSchedule from '../../components/TodaysSchedule';
import QuickAccess from '../../components/QuickAcess';
import ToolsAndConnections from '../../components/ToolsAndConnections';
import Image from 'next/image';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-7 ">
      
      {/* Latest Update Banner */}
      <div className="bg-red-800 text-white p-8 rounded-lg flex justify-between items-center mb-6">
        <div className=''>
          <span className="bg-[#9E9E5C] text-white px-4 py-2 rounded-4xl text-sm font-semibold">Latest Update</span>
          <p className="mt-2 text-lg font-bold">Keynote starts at 10:30 AM</p>
          <p className="text-sm text-gray-200">Hall A - Don’t miss our opening session</p>
        </div>
        <button className="text-white text-xl"><svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3722 11.4704C30.2093 12.3164 30.2093 13.6904 29.3722 14.5364L18.6573 25.3655C17.8202 26.2115 16.4607 26.2115 15.6236 25.3655C14.7865 24.5195 14.7865 23.1455 15.6236 22.2995L22.6888 15.1658H2.14298C0.957643 15.1658 0 14.198 0 13C0 11.802 0.957643 10.8342 2.14298 10.8342H22.6821L15.6303 3.70051C14.7932 2.85448 14.7932 1.48054 15.6303 0.634518C16.4674 -0.211506 17.8269 -0.211506 18.664 0.634518L29.3789 11.4636L29.3722 11.4704Z" fill="white"/>
</svg>
</button>
      </div>

    <TodaysSchedule />
    <QuickAccess />
    <ToolsAndConnections />
 <Image src="/images/line.png" alt="Line" width={1450} height={127} className="absolute " />
    
    </main>
  );
}

