"use client"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store/store"
import { FaCalendarAlt } from "react-icons/fa"
import Link from "next/link"
import api from "@/config/api"

export default function MyAgendaPage() {
  const eventId = useSelector((state: RootState) => state.event.id)
  const [sessions, setSessions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [emptyMessage, setEmptyMessage] = useState("")

  const fetchSessions = async () => {
    if (!eventId) {
      setEmptyMessage("Event not selected")
      setLoading(false)
      return
    }
    try {
      const res = await api.get(`/sessions/event/${eventId}/sessions`)
      const data = res.data || []

      const mapped = data.map((s: any) => {
        const start = new Date(s.startTime)
        const end = new Date(s.endTime)
        const minutes =
          isNaN(start.getTime()) || isNaN(end.getTime())
            ? 0
            : Math.round((end.getTime() - start.getTime()) / 60000)

        return {
          sessionId: s.id,
          sessionTitle: s.title,
          event: { eventDescription: s.description },
          startTime: isNaN(start.getTime()) ? null : start,
          endTime: isNaN(end.getTime()) ? null : end,
          minutes,
          location: s.location,
          category: s.category,
          speakers: (s.speakers || []).map((sp: any) => ({
            fullName: sp.name,
            pic: sp.photo,
          })),
        }
      })

      setSessions(mapped)
      if (mapped.length === 0) setEmptyMessage("No sessions found")
    } catch {
      setEmptyMessage("Failed to load sessions")
      setSessions([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSessions()
  }, [eventId])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#9B2033] rounded-full animate-spin"></div>
      </div>
    )
  }

  if (sessions.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-black text-lg font-medium">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10">
      {sessions.map((session, index) => (
        <div
          key={session?.sessionId ?? index}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between h-[380px]"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-black">
              {session.sessionTitle}
            </h2>
            <span className="text-red-600 w-4 h-4 cursor-pointer hover:opacity-70 transition">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="#9B2033"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.5V15.2406C0 15.6594 0.340625 16 0.759375 16C0.915625 16 1.06875 15.9531 1.19687 15.8625L6 12.5L10.8031 15.8625C10.9313 15.9531 11.0844 16 11.2406 16C11.6594 16 12 15.6594 12 15.2406V1.5C12 0.671875 11.3281 0 10.5 0H1.5C0.671875 0 0 0.671875 0 1.5Z"
                  stroke="#9B2033"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </div>

          <div className="flex items-center text-xs text-gray-600 space-x-2">
            <img
              src={
                session.speakers[0]?.pic
                  ? `https://your-image-base-url/${session.speakers[0].pic}`
                  : "/images/img (9).png"
              }
              className="w-6 h-6 rounded-full object-cover"
            />
            <span>{session.speakers[0]?.fullName ?? "Unknown"}</span>
          </div>

          <hr className="border-t border-gray-300" />

          <p className="text-xs text-gray-500 mb-3">
            {session.event?.eventDescription ?? "No description"}
          </p>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-blue-700" />
                <span>
                  {session.startTime && session.endTime
                    ? `${session.startTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })} - ${session.endTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}`
                    : "No time available"}
                </span>
              </div>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-xl text-xs font-semibold">
              {session.category || "No category"}
            </span>
          </div>

          <div className="flex text-xs text-gray-900 mb-2 items-center justify-between">
            <span>Duration</span>
            <span>{session.minutes} minutes</span>
          </div>
          <div className="flex text-xs text-gray-900 mb-2 items-center justify-between">
            <span>Room</span>
            <span>{session.location || "Hall B"}</span>
          </div>

          <Link
            href={
              session?.sessionId
                ? `/participants/SessionDetail/${session.sessionId}`
                : "#"
            }
            className="w-full"
          >
            <button className="w-full bg-[#9B2033] text-white py-2 text-sm rounded-md hover:bg-red-700 transition cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}
