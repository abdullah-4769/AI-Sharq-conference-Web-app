"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { setEventId } from "@/lib/store/features/event/eventSlice"
import Link from "next/link"

export default function EventsPage() {
  const dispatch = useDispatch()
  const [eventId, setEventIdInput] = useState("")

  const handleSetEvent = () => {
    const id = Number(eventId) // convert input to number
    if (!isNaN(id)) {
      dispatch(setEventId(id))
      setEventIdInput("") // clear input after setting
    } else {
      alert("Please enter a valid number")
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Events Page</h1>
      <input
        type="text"
        value={eventId}
        onChange={(e) => setEventIdInput(e.target.value)}
        placeholder="Enter Event ID"
        style={{ marginRight: 10 }}
      />
      <button onClick={handleSetEvent}>Set Event ID</button>
      <div style={{ marginTop: 20 }}>
        <Link href="/testing">Go to Testing Page</Link>
      </div>
    </div>
  )
}
