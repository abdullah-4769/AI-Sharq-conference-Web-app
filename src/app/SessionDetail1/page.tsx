import React from 'react';
import RelatedSessions from '../components/RelatedSessions';
import Attending from '../components/Attending';
import Image from 'next/image';

// Session interfaces & data
interface Session {
  title: string;
  time: string;
  hall: string;
  duration: string;
  capacity: string;
  description: string;
}

interface SessionHeaderProps {
  session: Session;
}

const sessionData: Session = {
  title: "The Future of Regional Cooperation",
  time: "10:00 AM - 11:30 AM",
  hall: "Hall A",
  duration: "90 minutes",
  capacity: "500 capacity",
  description:
    "Explore the evolving landscape of regional cooperation in the Middle East and North Africa. This keynote will examine emerging partnerships, economic integration opportunities, and the role of technology in fostering collaboration across borders.",
};

function SessionDetail1({ session }: SessionHeaderProps) {
  return (
    <>
      <div className=" p-6 ">
        <div className="flex justify-between items-center mb-6">
          {/* Left side: icon + text */}
          <div className="flex items-center space-x-3">
            <svg
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.627825 11.4704C-0.209275 12.3164 -0.209275 13.6904 0.627825 14.5364L11.3427 25.3655C12.1798 26.2115 13.5393 26.2115 14.3764 25.3655C15.2135 24.5195 15.2135 23.1455 14.3764 22.2995L7.31123 15.1658H27.857C29.0424 15.1658 30 14.198 30 13C30 11.802 29.0424 10.8342 27.857 10.8342H7.31793L14.3697 3.70051C15.2068 2.85448 15.2068 1.48054 14.3697 0.634518C13.5326 -0.211506 12.1731 -0.211506 11.336 0.634518L0.621128 11.4636L0.627825 11.4704Z"
                fill="#9B2033"
              />
            </svg>
            <h1 className="text-xl font-semibold text-black">Session Details</h1>
          </div>

          {/* Right side: icon */}
          <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M2.5 0.5H17.5C18.6161 0.5 19.5 1.3798 19.5 2.4375V24.7656C19.5 25.1581 19.1682 25.5 18.7344 25.5C18.5709 25.5 18.4155 25.4524 18.2891 25.3652L18.2871 25.3633L10.2822 19.8994L10 19.707L9.71777 19.8994L1.71289 25.3633L1.71094 25.3652C1.58453 25.4524 1.42912 25.5 1.26562 25.5C0.831842 25.5 0.5 25.1581 0.5 24.7656V2.4375C0.5 1.3798 1.38393 0.5 2.5 0.5Z"
              stroke="#9B2033"
            />
          </svg>
        </div>
      </div>

      <div className="mb-6 p-6 max-w-7xl mx-auto py-6 border border-gray-200 rounded-xl bg-white">
        <div className="flex justify-between text-xs text-red-700 font-semibold mb-1 ml-2">
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-xl">Workshop</span>
          <div>{session.time}</div>
        </div>
        <h1 className="text-lg font-bold mb-1 text-black ml-2">{session.title}</h1>
        <div className="flex items-center text-xs text-gray-500 mb-2 space-x-4 ml-2">
          <div className="flex items-center space-x-2">
            <img src="/images/Vector.png" alt="Hall Icon" className="w-4 h-4" />
            <strong>{session.hall}</strong>
          </div>

          <div className="flex items-center space-x-2">
            <img src="/images/Vector (1).png" alt="Duration Icon" className="w-4 h-4" />
            <span>{session.duration}</span>
          </div>

          <div className="flex items-center space-x-2">
            <img src="/images/Vector (2).png" alt="Capacity Icon" className="w-4 h-4" />
            <span>{session.capacity}</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 ml-2">{session.description}</p>
      </div>
    </>
  );
}

// Speaker interfaces & component
type SpeakerType = {
  image: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
};

interface SpeakerProps {
  speaker: SpeakerType;
}

function Speaker({ speaker }: SpeakerProps) {
  return (
    <section className="max-w-8xl mx-auto px-6">
      <h2 className="text-lg font-semibold mb-4 ml-3 text-black">Speakers</h2>

      <div className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm border border-gray-200 mb-6">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1 text-xs text-gray-800">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="font-semibold text-base">{speaker.name}</h3>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{speaker.title}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{speaker.organization}</span>
            <button className="ml-auto bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-xl">
              Keynote Speaker
            </button>
          </div>
          <br />
          <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
        </div>
      </div>
    </section>
  );
}

// SessionDetails component & props
type SessionDetailsProps = {
  details: {
    keyTopics: string[];
    targetAudience: string;
    language: string;
  };
};

function SessionDetails({ details }: SessionDetailsProps) {
  return (
    <>
       <h2 className="text-base font-semibold mb-4 text-gray-900 ml-9 ">Session Details</h2>

    <section className="bg-white max-w-7xl mx-auto p-6 rounded-xl mb-6 shadow-sm border border-gray-200">

      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 text-gray-900">Key Topics</h3>
        <div className="flex flex-wrap gap-2">
          {details.keyTopics.map((topic, idx) => (
            <span
              key={idx}
              className="bg-pink-100 text-pink-600 rounded-full px-3 py-1 text-xs font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-1 text-gray-900">Target Audience</h3>
        <p className="text-xs text-gray-700">{details.targetAudience}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-1 text-gray-900">Language</h3>
        <p className="text-xs text-gray-700">{details.language}</p>
      </div>
    </section>
    </>
  );
}

// Sample speaker data
const sampleSpeaker: SpeakerType = {
  name: "Dr. Johnathan",
  image: "/images/img (13).png",
  title: "Director of Regional Affairs",
  organization: "Middle East Institute",

  bio: `Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.`,
};

// Sample session details data
const sampleSessionDetails = {
  keyTopics: ["Regional Cooperation", "Economic Integration", "Technology", "Diplomacy"],
  targetAudience: "Policy Makers, Academics, Business Leaders",
  language: "English",
};

const relatedSessionsData = [
  {
    title: "Digital Transformation in MENA",
    speaker: "Dr. Sarah Hassan",
    speakerImage: "/images/speakers/sarah.png",
    time: "2:00 PM - 3:30 PM",
    tag: "Keynote",
    tagColor: "bg-blue-100 text-blue-700",
    duration: "90 minutes",
    room: "Hall B",
    description:
      "Exploring the role of diplomacy and collaboration in shaping future policies",
  },
  {
    title: "The Future of Regional Cooperation",
    speaker: "Prof. Omar Khalil",
    speakerImage: "/images/speakers/omar.png",
    time: "10:00 AM - 11:30 AM",
    tag: "Panel",
    tagColor: "bg-yellow-100 text-yellow-700",
    duration: "90 minutes",
    room: "Hall B",
    description:
      "Exploring the role of diplomacy and collaboration in shaping future policies",
  },
  {
    title: "Innovation in Sustainable Energy",
    speaker: "Dr. Mathew",
    speakerImage: "/images/speakers/mathew.png",
    time: "4:00 PM - 5:00 PM",
    tag: "Workshop",
    tagColor: "bg-purple-100 text-purple-700",
    duration: "90 minutes",
    room: "Room C2",
    description:
      "Exploring the role of diplomacy and collaboration in shaping future policies",
  },
];
// Final export with all components rendered
export default function SessionPage() {
  return (
    <>
      <SessionDetail1 session={sessionData} />
      <Speaker speaker={sampleSpeaker} />
      <SessionDetails details={sampleSessionDetails} />
            <RelatedSessions sessions={relatedSessionsData} />
            <Attending />
                <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute " />
      
    </>
  );
}
