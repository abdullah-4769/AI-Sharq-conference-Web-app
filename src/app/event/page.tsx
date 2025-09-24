"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { setEventId } from "@/lib/store/features/event/eventSlice"
import { setUserId } from "@/lib/store/features/user/userSlice"
import Link from "next/link"

export default function EventsPage() {
  const dispatch = useDispatch()
  const [eventId, setEventIdInput] = useState("")
  const [userId, setUserIdInput] = useState("")
  const [message, setMessage] = useState("")

  const handleSetIds = () => {
    const eId = Number(eventId)
    const uId = Number(userId)

    if (isNaN(eId) || isNaN(uId)) {
      setMessage("Please enter valid numbers")
      return
    }

    dispatch(setEventId(eId))
    dispatch(setUserId(uId))

    setEventIdInput("")
    setUserIdInput("")
    setMessage("Event and User saved successfully")
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Events Page</h1>

      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          value={eventId}
          onChange={(e) => setEventIdInput(e.target.value)}
          placeholder="Enter Event ID"
          style={{ marginRight: 10 }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserIdInput(e.target.value)}
          placeholder="Enter User ID"
          style={{ marginRight: 10 }}
        />
      </div>

      <button onClick={handleSetIds}>Save</button>

      {message && (
        <p style={{ color: "green", marginTop: 10 }}>{message}</p>
      )}

      <div style={{ marginTop: 20 }}>
        <Link href="/testing">Go to Testing Page</Link>
      </div>
    </div>
  )
}
