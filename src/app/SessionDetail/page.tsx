"use client"
import { useState } from "react";
// import { Speaker } from "./Speaker";
import  SessionDetails  from "../components/SessionDetails";
// import { RelatedSessions } from "./RelatedSessions";
// import { ActionButtons } from "./ActionButtons";
import { SessionHeader } from "../components/SessionHeader";
import Speaker from "../components/Speaker";
import RelatedSessions from "../components/RelatedSessions";
import ActionButtons from "../components/ActionButtons";
import Image from "next/image";

const sessionData = {
  title: "The Future of Regional Cooperation",
  time: "10:00 AM - 11:30 AM",
  hall: "Hall A",
  duration: "90 minutes",
  capacity: "500 capacity",
  description:
    "Explore the evolving landscape of regional cooperation in the Middle East and North Africa. This keynote will examine emerging partnerships, economic integration opportunities, and the role of technology in fostering collaboration across borders.",
};

const speakerData = {
  name: "Dr. Johnathan",
  image: "/images/img (13).png",
  title: "Director of Regional Affairs",
  organization: "Middle East Institute",
    affiliation: "Tech Corp", // add this

  bio: `Dr. Johnathan is a professor of Political Science at Cairo University with expertise in international relations and Middle Eastern diplomacy. She has published extensively on regional cooperation and has advised multiple governments and organizations on policy development.`,
};

const sessionDetailsData = {
  keyTopics: [
    "Economic Integration",
    "Digital Cooperation",
    "Trade Partnerships",
    "Regional Security",
  ],
  targetAudience:
    "Government officials, policy makers, business leaders, and researchers interested in regional cooperation and economic development.",
  language: "English with Arabic translation available",
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

export default function SessionDetailsPage() {
  return (
    <>
    <div className="max-w-7xl mx-auto p-6 ">
           {/* Header */}
      <div className="flex items-center gap-2 mb-6">
<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.627825 11.4704C-0.209275 12.3164 -0.209275 13.6904 0.627825 14.5364L11.3427 25.3655C12.1798 26.2115 13.5393 26.2115 14.3764 25.3655C15.2135 24.5195 15.2135 23.1455 14.3764 22.2995L7.31123 15.1658H27.857C29.0424 15.1658 30 14.198 30 13C30 11.802 29.0424 10.8342 27.857 10.8342H7.31793L14.3697 3.70051C15.2068 2.85448 15.2068 1.48054 14.3697 0.634518C13.5326 -0.211506 12.1731 -0.211506 11.336 0.634518L0.621128 11.4636L0.627825 11.4704Z" fill="#9B2033"/>
</svg>
        <h1 className="text-xl font-semibold text-black ml-4">Session Details</h1>
      </div><br></br>
      <SessionHeader session={sessionData} />
      <Speaker speaker={speakerData} />
      <SessionDetails details={sessionDetailsData} />
      <RelatedSessions sessions={relatedSessionsData} />
      <ActionButtons />
    </div>
              <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute " />
    </>
  );
}
