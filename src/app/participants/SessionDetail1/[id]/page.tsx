import React from "react"
import Image from "next/image"
import RelatedSessionsGrid from "@/app/components/RelatedSessions"
import Attending from "@/app/components/Attending"
import { FaArrowLeft } from "react-icons/fa"
import Link from "next/link"
import api from "@/config/api"

interface PageProps {
    params: {
        id: string
    }
}

// Fetch session detail with axios instance
async function getSessionDetail(id: string) {
    const res = await api.get(`/sessions/detail/${id}`)
    return res.data
}

export default async function SessionPage({ params }: PageProps) {
    const session = await getSessionDetail(params.id)

    return (
        <>
            {/* Header */}
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                        <Link href="/participants/Schedule">
                            <FaArrowLeft className="text-red-600 cursor-pointer" size={20} />
                        </Link>
                        <h1 className="text-xl font-semibold text-black">Session Details</h1>
                    </div>
                </div>
            </div>


            <div className="mb-6 p-6 max-w-7xl mx-auto py-6 border border-gray-200 rounded-xl bg-white">
                <div className="flex justify-between text-xs text-red-700 font-semibold mb-1 ml-2">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-xl">
                        {session.category}
                    </span>
                    <div>
                        {new Date(session.startTime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}{" "}
                        -{" "}
                        {new Date(session.endTime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                </div>
                <h1 className="text-lg font-bold mb-1 text-black ml-2">{session.title}</h1>
                <div className="flex items-center text-xs text-gray-500 mb-2 space-x-4 ml-2">
                    <div className="flex items-center space-x-2">
                        <img src="/images/Vector.png" alt="Hall Icon" className="w-4 h-4" />
                        <strong>{session.location}</strong>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/images/Vector (1).png" alt="Duration Icon" className="w-4 h-4" />
                        <span>
                            {Math.floor(
                                (new Date(session.endTime).getTime() -
                                    new Date(session.startTime).getTime()) /
                                60000
                            )}{" "}
                            mins
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/images/Vector (2).png" alt="Capacity Icon" className="w-4 h-4" />
                        <span>{session.capacity} capacity</span>
                    </div>
                </div>
                <p className="text-xs text-gray-600 ml-2">{session.description}</p>
            </div>

            {/* Speakers */}
            {session.speakers?.map((speaker: any) => (
                <section
                    key={speaker.id}
                    className="max-w-8xl mx-auto px-6 bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm border border-gray-200 mb-6"
                >
                    <img
                        src={speaker.user?.photo || "/images/img (13).png"}
                        alt={speaker.user?.name}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1 text-xs text-gray-800">
                        <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-base">{speaker.user?.name}</h3>
                            {speaker.designations && speaker.designations.length > 0 && (
                                <span className="text-gray-600">
                                    {speaker.designations.join(" • ")}
                                </span>
                            )}

{speaker.category && (
  <span className="ml-auto bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-xl">
    {speaker.category}
  </span>
)}

                        </div>
                        <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
                    </div>
                </section>
            ))}

            {/* Related Sessions + Attending */}
            <RelatedSessionsGrid />
           {/* Who's Attending */}
<section className="max-w-7xl mx-auto px-6 mt-6">
  <h2 className="text-base font-semibold mb-3 text-black">Who's Attending</h2>

  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      {/* Avatars */}
      <div className="flex -space-x-4">
        {session.registeredUsers?.slice(0, 5).map((user: any, idx: number) => (
          <img
            key={idx}
            src={
              user.photo
                ? `/uploads/${user.photo}` // change path if API returns full URL
                : "/images/img (13).png"
            }
            alt={user.name}
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      {/* Count */}
      <span className="text-xs text-gray-600 ml-2">
        {session.registrationCount} registered attendees
      </span>
    </div>

    {/* Arrow button */}
    <button className="text-red-700 hover:text-red-900">
      <svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3722 11.4704C30.2093 12.3164 30.2093 13.6904 29.3722 14.5364L18.6573 25.3655C17.8202 26.2115 16.4607 26.2115 15.6236 25.3655C14.7865 24.5195 14.7865 23.1455 15.6236 22.2995L22.6888 15.1658H2.14298C0.957643 15.1658 0 14.198 0 13C0 11.802 0.957643 10.8342 2.14298 10.8342H22.6821L15.6303 3.70051C14.7932 2.85448 14.7932 1.48054 15.6303 0.634518C16.4674 -0.211506 17.8269 -0.211506 18.664 0.634518L29.3789 11.4636L29.3722 11.4704Z"
          fill="#9B2033"
        />
      </svg>
    </button>
  </div>
</section>

            <Image
                src="/images/line.png"
                alt="Line"
                width={1729}
                height={127}
                className="absolute"
            />
        </>
    )
}
