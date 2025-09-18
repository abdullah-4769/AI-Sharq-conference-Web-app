// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import TodaysSchedule from "../../components/TodaysSchedule";
import QuickAccess from "../../components/QuickAcess";
import ToolsAndConnections from "../../components/ToolsAndConnections";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { getRemainingSessions } from "../../config/services/participants";

export default function Home() {
  const [sessions, setSessions] = useState<any[]>([]);

  const fetchSessions = async () => {
    try {
      const data = await getRemainingSessions(2);
      console.log("API raw response:", data);

      // Normalize response
      const sessionsArr = Array.isArray(data)
        ? data
        : data?.allSessions ??
          data?.liveSessions ??
          data?.data?.allSessions ??
          [];

      // Filter for live sessions only    
      const liveSessions = (sessionsArr ?? []).filter(
        (session: any) => session.is_live === true
      );

      setSessions(liveSessions);
    } catch (err) {
      console.error("Error fetching sessions:", err);
      setSessions([]);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Confrence banner */}
        <div className="bg-red-800 text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <span className="bg-[#9E9E5C] text-white px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
              Live
            </span>
    
            <p className="mt-2 text-lg md:text-xl font-bold">
              Keynote starts at 10:30 AM
            </p>
            <p className="text-sm text-gray-200">
              Hall A - Don’t miss our opening session
            </p>
          </div>
          <button className="mt-4 md:mt-0 text-white text-xl">
            <FaArrowRight />
          </button>
        </div>

        {/* Latest Update Banner */}
        <div className="bg-white text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <span className="bg-[#9E9E5C] text-white px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
              Latest Update
            </span>
            <p className="mt-2 text-lg md:text-xl font-bold text-red-700">
              Keynote starts at 10:30 AM
            </p>
            <p className="text-sm text-red-700">
              Hall A - Don’t miss our opening session
            </p>
          </div>
          <button className="mt-4 md:mt-0 text-red-700 text-xl">
            <FaArrowRight />
          </button>
        </div>

        <TodaysSchedule />
        <div className="mt-8">
          <QuickAccess />
        </div>
        <div className="mt-8">
          <ToolsAndConnections />
        </div>
      </div>

      {/* Bottom Line Image */}
      <Image
        src="/images/line.png"
        alt="Line"
        width={1450}
        height={127}
        className="w-full h-auto mt-10"
      />
    </main>
  );
}
