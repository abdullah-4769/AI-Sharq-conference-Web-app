"use client"
import React, { useEffect, useState } from "react"
import SpeakerSession from "../../../components/SpeakerSession"
import Image from "next/image"
import { FaArrowLeft } from "react-icons/fa"
import Link from "next/link"
import { useParams } from "next/navigation"
import api from "@/config/api"

const SpeakerDetails = () => {
  const params = useParams()
  const speakerId = params?.id

  const [speaker, setSpeaker] = useState<any>(null)
  const [sessions, setSessions] = useState<any[]>([])

  useEffect(() => {
    const fetchSpeaker = async () => {
      try {
        if (!speakerId) return
        const res = await api.get(`/speakers/${speakerId}`)
        console.log("Backend response:", res.data)
        setSpeaker(res.data)

        // Use backend sessions if available, otherwise fallback to default
        if (res.data.sessions && res.data.sessions.length > 0) {
          const sessionData = res.data.sessions.map((s: any) => ({
            title: s.title,
            time: "TBD",
            duration: "TBD",
            room: "TBD",
            type: "TBD",
            typeColor: "#F3E8FF",
            typeTextColor: "#6B21A8",
          }))
          setSessions(sessionData)
        } else {
          // fallback static sessions if API has no sessions
          setSessions([
            {
              title: "Exploring the role of diplomacy and collaboration in shaping future policies",
              time: "2:00 PM – 3:30 PM",
              duration: "90 minutes",
              room: "Hall B",
              type: "Panel",
              typeColor: "#91C6FF",
              typeTextColor: "#1E40AF",
            },
            {
              title: "Exploring the role of diplomacy and collaboration in shaping future policies",
              time: "10:00 AM – 11:30 AM",
              duration: "90 minutes",
              room: "Hall B",
              type: "Keynote",
              typeColor: "#E9EB87",
              typeTextColor: "#606C38",
            },
            {
              title: "Exploring the role of diplomacy and collaboration in shaping future policies",
              time: "4:00 PM – 5:00 PM",
              duration: "60 minutes",
              room: "Room C2",
              type: "Workshop",
              typeColor: "#F3E8FF",
              typeTextColor: "#6B21A8",
            },
          ])
        }
      } catch (error) {
        console.error("Error fetching speaker:", error)
      }
    }
    fetchSpeaker()
  }, [speakerId])

  if (!speaker) return <p>Loading...</p>

  return (
    <div className="flex flex-col justify-center items-center p-0 gap-10 w-full max-w-[1280px] mx-auto min-h-screen py-8">
      {/* Header Section */}
      <div className="flex flex-row items-center gap-10 w-full max-w-[1280px] h-8">
        <Link href="/participants/Speakers">
          <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
        </Link>
        <h1 className="text-2xl font-medium text-[#282828] leading-6 tracking-tight">
          Speaker Details
        </h1>
      </div>

      {/* Speaker Profile Section */}
      <div className="flex flex-col items-center gap-6 w-full max-w-[1280px]">
     <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
<Image
  src={`http://localhost:5000/uploads/${speaker.user.file}`}
  alt={speaker.user.name}
  fill
  style={{ objectFit: "cover" }}
  unoptimized
/>

</div>




        <div className="flex flex-col items-center gap-6 w-full max-w-[1280px]">
          <h2 className="text-2xl font-medium text-[#282828] text-center leading-6 tracking-tight">
            {speaker.user.name}
          </h2>
          <p className="text-base text-[#282828] text-center leading-6">
            {speaker.designations.join(" - ")}
          </p>
        </div>
      </div>

      {/* Biography Section */}
      <div className="w-full max-w-[1280px] p-6 bg-white border border-gray-300 shadow-sm rounded-2xl">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-[#282828] leading-7">Biography</h3>
          <p className="text-sm text-[#424242] leading-5">{speaker.bio}</p>
        </div>
      </div>

      {/* Areas of Expertise Section */}
      <div className="w-full max-w-[1280px] p-6 bg-white border border-gray-300 shadow-sm rounded-2xl">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-[#282828] leading-7">Areas of Expertise</h3>
          <div className="flex flex-row flex-wrap gap-3.5">
            {speaker.expertise.map((exp: string, index: number) => (
              <div key={index} className="px-3 py-2.5 bg-[#FFEFF2] rounded-full">
                <span className="text-lg font-medium text-[#9B2033] leading-5">{exp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Speaking Sessions Section */}
      <div className="flex justify-center w-full max-w-[1280px]">
        <h3 className="text-2xl font-medium text-[#282828] leading-6 tracking-tight">
          Speaking Sessions ({sessions.length})
        </h3>
      </div>

      {/* Sessions Grid */}
      <div className="flex flex-row flex-wrap justify-center gap-6 w-full max-w-[1280px]">
        {sessions.map((session, index) => (
          <SpeakerSession
            key={index}
            title={session.title}
            time={session.time}
            duration={session.duration}
            room={session.room}
            type={session.type}
            typeColor={session.typeColor}
            typeTextColor={session.typeTextColor}
          />
        ))}
      </div>

      {/* Connect & Contact Section */}
     <div className="w-full max-w-[1280px] p-6 bg-white border border-gray-300 shadow-sm rounded-2xl">
  <div className="flex flex-col gap-6">
    <h3 className="text-lg font-semibold text-[#282828] leading-7">Connect & Contact</h3>
    <div className="flex flex-row gap-2">
      {speaker.linkedin && (
        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 p-10 border border-gray-300 rounded-lg flex items-center justify-center gap-2.5">
          <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
          <span className="text-base text-black leading-5">LinkedIn</span>
        </a>
      )}
      {speaker.facebook && (
        <a href={speaker.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 p-10 border border-gray-300 rounded-lg flex items-center justify-center gap-2.5">
          <Image src="/images/facebook.png" alt="Facebook" width={24} height={24} />
          <span className="text-base text-black leading-5">Facebook</span>
        </a>
      )}
     
      {speaker.website && (
        <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="flex-1 p-10 border border-gray-300 rounded-lg flex items-center justify-center gap-2.5">
          <Image src="/images/web.png" alt="Website" width={24} height={24} />
          <span className="text-base text-black leading-5">Website</span>
        </a>
      )}
      {speaker.user.email && (
        <a href={`mailto:${speaker.user.email}`} className="flex-1 p-10 border border-gray-300 rounded-lg flex items-center justify-center gap-2.5">
          <Image src="/images/gmail.png" alt="Email" width={24} height={24} />
          <span className="text-base text-black leading-5">Email</span>
        </a>
      )}
     
    </div>
  </div>
</div>

      <img src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[1710px]" />
    </div>
  )
}

export default SpeakerDetails
