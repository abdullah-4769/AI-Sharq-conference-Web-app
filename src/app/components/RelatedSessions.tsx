import React from "react";
type Session = {
  title: string;
  speaker: string;
  speakerImage: string;
  time: string;
  tag: string;
  tagColor: string;
  duration: string;
  room: string;
  description: string;
};

type RelatedSessionsGridProps = {
  sessions: Session[];
};

const allEvents = [
  {
    title: "Digital Transformation in MENA",
    speakerImage: "/images/img (7).png", // replace with real image path
    speaker: "Dr. Sarah Hassan +2 more",
    description:
      "Exploring the role of diplomacy and collaboration in shaping future policies.",
    time: "2:00 PM – 3:30 PM",
    tag: "Keynote",
    tagColor: "bg-blue-200 text-blue-700",
    duration: "90 minutes",
    room: "Hall B",
  },
  {
    title: "The Future of Regional Cooperation",
    speakerImage: "/images/img (8).png",
    speaker: "Prof. Omar Khair",
    description:
      "Exploring the role of diplomacy and collaboration in shaping future policies.",
    time: "10:00 AM – 11:30 AM",
    tag: "Panel",
    tagColor: "bg-yellow-200 text-yellow-700",
    duration: "90 minutes",
    room: "Hall B",
  },
  {
    title: "Innovation in Sustainable Energy",
    speakerImage: "/images/img (9).png",
    speaker: "Dr. Mathew",
    description:
      "Exploring the role of diplomacy and collaboration in shaping future policies.",
    time: "4:00 PM – 5:00 PM",
    tag: "Workshop",
    tagColor: "bg-purple-200 text-purple-700",
    duration: "90 minutes",
    room: "Room C2",
  },
];

export default function RelatedSessionsGrid({ sessions }: RelatedSessionsGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Related Sessions</h2>
        <a href="/all-sessions" className="text-sm text-gray-600 hover:underline">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allEvents.map((event, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-sm font-semibold text-black">{event.title}</h3>
              <button
                aria-label="Bookmark"
                className="text-gray-400 hover:text-red-700 transition"
              >
               <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 0.5H10.5C11.052 0.5 11.5 0.948017 11.5 1.5V15.2402C11.5 15.3828 11.3828 15.5 11.2402 15.5C11.2121 15.5 11.1851 15.4961 11.1602 15.4883L11.0898 15.4531L6.28711 12.0908L6 11.8896L5.71289 12.0908L0.910156 15.4531L0.839844 15.4883C0.814907 15.4961 0.787903 15.5 0.759766 15.5C0.617158 15.5 0.5 15.3828 0.5 15.2402V1.5C0.5 0.948017 0.948017 0.5 1.5 0.5Z" stroke="#9B2033"/>
</svg>

              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 mb-3">{event.description}</p>

            {/* Speaker */}
            <div className="flex items-center text-xs text-gray-600 mb-3 space-x-2">
              <img
                src={event.speakerImage}
                alt={event.speaker}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>{event.speaker}</span>
            </div>

            {/* Time & Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-xs text-gray-600 space-x-1">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#2D7DD2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="inline-block"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{event.time}</span>
              </div>

              <span
                className={`px-2 py-1 rounded-xl text-xs font-semibold ${event.tagColor}`}
              >
                {event.tag}
              </span>
            </div>

            {/* Duration & Room */}
            <div className="flex justify-between text-xs text-gray-900 mb-4">
              <span>
                <strong>Duration:</strong> {event.duration}
              </span>
              <span>
                <strong>Room:</strong> {event.room}
              </span>
            </div>

            {/* View Details Button */}
            <button className="w-full bg-[#9B2033] text-white py-2 text-sm rounded-md hover:bg-red-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
