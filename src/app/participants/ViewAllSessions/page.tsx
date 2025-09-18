"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import DiscoverMoreSessions from "../../components/DiscoverMoreSessions";
import Link from "next/link";
import { getRemainingSessions } from "@/app/config/services/participants";

const filters = ["Daily", "Weekly", "10 Days", "90 Days", "All Time"];

// helper function to parse duration
const parseDuration = (duration: string) => {
  if (!duration) return { startTime: null, endTime: null };
  const parts = duration.split(" - ").map((p) => p.trim());
  const start = parts[0];
  const end = parts[1] ?? null;
  return {
    startTime: start ? new Date(start) : null,
    endTime: end ? new Date(end) : null,
  };
};

export default function MyAgendaPage() {
  const [activeFilter] = useState("Daily");
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

      // Transform (without filtering)
      const transformed = (sessionsArr ?? []).map((session: any) => {
        const { startTime, endTime } = parseDuration(session?.duration || "");
        return { ...session, startTime, endTime };
      });

      setSessions(transformed);
    } catch (err) {
      console.error("Error fetching sessions:", err);
      setSessions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <>
      <div className="p-6 md:p-10  min-h-screen font-sans">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/participants/Home">
            <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
          </Link>
          <h1 className="text-xl font-semibold text-black">All Sessions</h1>
        </div>

        <div className="flex  md:flex-nowrap  justify-between  mb-8 md:gap-5">
          {/* Search Bar */}
          <div className="flex  bg-white border border-gray-300 rounded-md px-3 py-2 w-[385px] ">
            <FaSearch className="text-red-900 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm w-full text-black"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-5">
            {filters.map((filter) => (
              <button
                key={filter}
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

          {/* Date Selector */}
          <div className="flex items-center border border-gray-300 bg-white px-3 py-2 rounded-md text-sm text-gray-700">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            Jan 2024 - Dec 2024
          </div>

          {/* Filter Icon on Far Right */}
          <div className="text-gray-600 text-xl cursor-pointer hover:text-gray-800">
            {/* <img src={"images/Frame 1000004593.png"} alt="Image not show" /> */}
          </div>
        </div>
        {/* Agenda Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#9B2033] rounded-full animate-spin"></div>
          </div>
        ) : sessions.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-black text-lg font-medium">
              No sessions available
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {sessions.map((session, index) => (
              <div
                key={session?.sessionId ?? index}
                className={`${
                  index % 2 === 0
                    ? "bg-red-800 text-gray-200"
                    : "bg-white text-red-800"
                } p-6 md:p-10 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center border border-red-800`}
              >
                {/* Left Side Content */}
                <div className="flex gap-1 flex-col">
                  {/* Title */}
                  <p className="mt-2 text-lg md:text-xl font-bold">
                    {session.sessionTitle || "No title"}
                  </p>

                  <p className="text-xs mt-1">
                    {session.event?.eventDescription || "No description"}
                  </p>


                  {/* Time */}

                  <div className="flex items-center text-xs gap-1">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4594 26.0046H6.0616C5.40605 26.0046 4.77735 25.7442 4.31381 25.2807C3.85026 24.8171 3.58984 24.1884 3.58984 23.5329V8.70231C3.58984 8.04676 3.85026 7.41806 4.31381 6.95451C4.77735 6.49097 5.40605 6.23055 6.0616 6.23055H20.8922C21.5477 6.23055 22.1764 6.49097 22.64 6.95451C23.1035 7.41806 23.3639 8.04676 23.3639 8.70231V13.6458H3.58984M22.128 17.3535V22.297H27.0716M22.128 17.3535C23.4392 17.3535 24.6966 17.8743 25.6236 18.8014C26.5507 19.7285 27.0716 20.9859 27.0716 22.297M22.128 17.3535C20.8169 17.3535 19.5595 17.8743 18.6325 18.8014C17.7054 19.7285 17.1845 20.9859 17.1845 22.297C17.1845 23.6081 17.7054 24.8655 18.6325 25.7926C19.5595 26.7197 20.8169 27.2405 22.128 27.2405C23.4392 27.2405 24.6966 26.7197 25.6236 25.7926C26.5507 24.8655 27.0716 23.6081 27.0716 22.297M18.4204 3.75879V8.70231M8.53337 3.75879V8.70231"
                        stroke={index % 2 === 0 ? "#FFFFFF" : "#9B2033"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-xs mt-1">
                      {session.startTime && session.endTime ? (
                        <>
                          {session.startTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          -{" "}
                          {session.endTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </>
                      ) : (
                        "No time available"
                      )}
                    </p>{" "}
                  </div>

                   {/* Location row with icon */}
                  <p className="text-sm  flex items-center gap-2 mt-1">
                    <FaMapMarkerAlt className=" text-base" />
                    {session.location || "No location"}
                  </p>
                  
                </div>

                {/* Right Side Button */}
                <button className="mt-4 md:mt-0 text-white text-xl">
                  <Link
                    href={
                      session?.sessionId
                        ? `/participants/SessionDetail/${session.sessionId}`
                        : "#"
                    }
                  >
                    <FaArrowRight />
                  </Link>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <DiscoverMoreSessions />
      <Image
        src="/images/line.png"
        alt="Logo"
        width={1729}
        height={127}
        className="absolute "
      />
    </>
  );
}
