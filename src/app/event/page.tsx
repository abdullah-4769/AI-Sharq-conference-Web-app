"use client"

import { useDispatch } from "react-redux"
import { setEventId } from "@/lib/store/features/event/eventSlice"
import Link from "next/link"

export default function EventsPage() {
  const dispatch = useDispatch()

  const handleSetEvent = () => {
    dispatch(setEventId(2))
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Events Page</h1>
      <button onClick={handleSetEvent}>Set Event ID = 2</button>
      <div style={{ marginTop: 20 }}>
        <Link href="/testing">Go to Testing Page</Link>
      </div>
    </div>
  )
}
