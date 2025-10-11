"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { setEventId } from "@/lib/store/features/event/eventSlice"
import { setUserId } from "@/lib/store/features/user/userSlice"
import { setSpeakerId } from "@/lib/store/features/speaker/speakerSlice"
import Link from "next/link"

export default function EventsPage() {
  const dispatch = useDispatch()

  // Input states
  const [eventId, setEventIdInput] = useState("")
  const [userId, setUserIdInput] = useState("")
  const [speakerId, setSpeakerIdInput] = useState("")

  // Toggle states
  const [showSpeakerInput, setShowSpeakerInput] = useState(false)

  // Message display
  const [message, setMessage] = useState("")

  // Save Event and User IDs
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

  // Save Speaker ID
  const handleSetSpeakerId = () => {
    const sId = Number(speakerId)

    if (isNaN(sId)) {
      setMessage("Please enter a valid speaker ID")
      return
    }

    dispatch(setSpeakerId(sId))
    setSpeakerIdInput("")
    setMessage("Speaker ID saved successfully")
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Events Page</h1>

      {/* Event ID input */}
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          value={eventId}
          onChange={(e) => setEventIdInput(e.target.value)}
          placeholder="Enter Event ID"
          style={{ marginRight: 10 }}
        />
      </div>

      {/* User ID input */}
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserIdInput(e.target.value)}
          placeholder="Enter User ID"
          style={{ marginRight: 10 }}
        />
      </div>

      {/* Save Event and User IDs */}
      <button onClick={handleSetIds}>Save Event and User</button>

      {/* Separate toggle button for speaker */}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setShowSpeakerInput(!showSpeakerInput)}>
          {showSpeakerInput ? "Hide Speaker ID" : "Add Speaker ID"}
        </button>
      </div>

      {/* Speaker input shown when toggled */}
      {showSpeakerInput && (
        <div style={{ marginTop: 10 }}>
          <input
            type="text"
            value={speakerId}
            onChange={(e) => setSpeakerIdInput(e.target.value)}
            placeholder="Enter Speaker ID"
            style={{ marginRight: 10 }}
          />
          <button onClick={handleSetSpeakerId}>Save Speaker ID</button>
        </div>
      )}

      {/* Message display */}
      {message && (
        <p style={{ color: "green", marginTop: 10 }}>{message}</p>
      )}

      {/* Navigation link */}
      <div style={{ marginTop: 20 }}>
        <Link href="/testing">Go to Testing Page</Link>
      </div>
    </div>
  )
}
