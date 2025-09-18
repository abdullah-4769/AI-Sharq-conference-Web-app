"use client";

import { Bell, MessageSquare, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { getRemainingSessions } from "../config/services/participants";
import LiveIndicator from "./LiveIndicator";

export default function Navbar() {
  
  return (
    <nav className="w-full bg-white shadow-md px-6 py-6 flex items-center justify-between">
{/* Left: Logo */}
<div className="flex items-center">
  <Image 
    src="/images/logo1.png"   
    alt="Logo"
    width={150}               // Increased size
    height={150}
    className="object-contain" 
  />
</div>
      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* 🔴 Live Indicator */
        <LiveIndicator />}

        {/* Notification Icon */}
        <div className="relative">
          <div className="w-10 h-10 flex items-center p-2 justify-center bg-red-100 rounded-full shadow-sm cursor-pointer">
<img src="/images/tabler-icon-bell-filled.png" alt="" />

          </div>
          {/* Red Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#234D70] rounded-full border border-white"></span>
        </div>

        {/* Comment Icon */}
        <div className="relative">
          <div className="w-10 h-10 flex items-center p-2 justify-center bg-red-100 rounded-full shadow-sm cursor-pointer">
<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0905 20.6135C14.0931 20.6135 14.6228 21.8004 13.9541 22.5468C13.5196 23.033 12.9873 23.4219 12.392 23.688C11.7968 23.954 11.152 24.0913 10.5 24.0908C9.84794 24.0913 9.20317 23.954 8.6079 23.688C8.01264 23.4219 7.48033 23.033 7.04587 22.5468C6.40605 21.8328 6.86274 20.7166 7.78074 20.6216L7.90824 20.6146L13.0905 20.6135Z" fill="#9B2033"/>
<path d="M10.4999 0.908936C12.074 0.908936 13.4046 1.95559 13.8323 3.39055L13.8856 3.58875L13.8949 3.63859C15.1727 4.35944 16.2615 5.37271 17.0722 6.59544C17.8829 7.81816 18.3925 9.21554 18.5591 10.6731L18.5916 11.0058L18.6136 11.3408V14.738L18.6379 14.8957C18.7966 15.7497 19.2692 16.5134 19.9628 17.0365L20.1563 17.1721L20.3441 17.2869C21.3409 17.8514 20.9932 19.3338 19.9071 19.4474L19.7727 19.4544H1.22721C0.0356662 19.4544 -0.380447 17.8734 0.65578 17.2869C1.09743 17.037 1.47902 16.6934 1.77377 16.2803C2.06852 15.8672 2.26928 15.3946 2.36196 14.8957L2.3863 14.7299L2.38746 11.2874C2.45813 9.77352 2.89881 8.30001 3.67091 6.99586C4.44301 5.69172 5.523 4.59671 6.81635 3.80666L7.1038 3.63744L7.11539 3.58759C7.27935 2.89449 7.65199 2.26836 8.18302 1.79371C8.71404 1.31906 9.3779 1.01874 10.085 0.933276L10.2959 0.913572L10.4999 0.908936Z" fill="#9B2033"/>
<path d="M10.4999 0.908936C12.074 0.908936 13.4046 1.95559 13.8323 3.39055L13.8856 3.58875L13.8949 3.63859C15.1727 4.35944 16.2615 5.37271 17.0722 6.59544C17.8829 7.81816 18.3925 9.21554 18.5591 10.6731L18.5916 11.0058L18.6136 11.3408V14.738L18.6379 14.8957C18.7966 15.7497 19.2692 16.5134 19.9628 17.0365L20.1563 17.1721L20.3441 17.2869C21.3409 17.8514 20.9932 19.3338 19.9071 19.4474L19.7727 19.4544H1.22721C0.0356662 19.4544 -0.380447 17.8734 0.65578 17.2869C1.09743 17.037 1.47902 16.6934 1.77377 16.2803C2.06852 15.8672 2.26928 15.3946 2.36196 14.8957L2.3863 14.7299L2.38746 11.2874C2.45813 9.77352 2.89881 8.30001 3.67091 6.99586C4.44301 5.69172 5.523 4.59671 6.81635 3.80666L7.1038 3.63744L7.11539 3.58759C7.27935 2.89449 7.65199 2.26836 8.18302 1.79371C8.71404 1.31906 9.3779 1.01874 10.085 0.933276L10.2959 0.913572L10.4999 0.908936Z" stroke="#9B2033"/>
</svg>
          </div>
          {/* Red Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#234D70] rounded-full border border-white"></span>
        </div>

        {/* Avatar + Text */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/img.png"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-red-500">Welcome 👋</span>
            <span className="flex items-center gap-1 font-medium text-gray-800">
              Johnathan <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 5L5 0L10 5H0Z" fill="#414141"/>
</svg>

            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
