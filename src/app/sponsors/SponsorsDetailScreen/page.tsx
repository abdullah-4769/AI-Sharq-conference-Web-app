"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGlobe, FaEnvelope, FaPhone, FaArrowLeft, FaCrown } from 'react-icons/fa'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import SpeakerSession from '../../components/SpeakerSession'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import api from '@/config/api'

const SponsorsDetailsScreen: React.FC = () => {
  const searchParams = useSearchParams()
  const sponsorId = searchParams.get('sponsorId') // get sponsorId from query
  const [sponsor, setSponsor] = useState<any>(null)
  const [sessions, setSessions] = useState<any[]>([])

  useEffect(() => {
    if (!sponsorId) return
    const fetchSponsor = async () => {
      try {
        const res = await api.get(`/sponsors/${sponsorId}`)
        setSponsor(res.data)
        setSessions(res.data.sessions || [])
      } catch (error) {
        console.error(error)
        setSponsor(null)
        setSessions([])
      }
    }
    fetchSponsor()
  }, [sponsorId])

  if (!sponsor) return <div>Loading...</div>

  return (
    <div className="relative w-full h-screen">
   <div
  className="absolute w-[1440px] h-[231px] bg-cover bg-center"
  style={{ backgroundImage: `url(${sponsor.Pic_url || '/images/building.jpg'})` }}
>

  <div className="absolute w-[40px] h-[40px] left-[20px] top-[20px] rounded-full flex items-center justify-center cursor-pointer">
    <Link href="/participants/Sponsors&Exhibitors">
      <FaArrowLeft className="text-red-800 w-[20px] h-[20px] cursor-pointer" />
    </Link>
  </div>

  <div className="absolute flex flex-row justify-center items-center gap-2 left-[1149px] top-[39px] w-[211.25px] h-[37px] bg-[#FFFEEF] rounded-full px-3 py-2">
    <FaCrown className="text-yellow-400 w-[20.25px] h-[15.75px] flex-none" />
    <span className="text-[#282828] font-medium text-2xl leading-6 tracking-tight font-['IBM_Plex_Sans']">
      Gold Sponsors
    </span>
  </div>
</div>


      <div
        className="absolute w-[177px] h-[177px] top-[140px]"
        style={{ left: 'calc(50% - 177px/2 - 550.5px)' }}
      >
        <div
          className="absolute w-[177px] h-[177px] left-0 top-0 rounded-full"
          style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #2563EB 100%)' }}
        />
      </div>

      <div className="absolute w-[1280px] h-[1336px] left-[80px] top-[351px] flex flex-col gap-11">
        <button className="w-44 h-12 bg-[#9B2033] text-white rounded-md font-medium text-base mb-4 p-3 flex items-center justify-center">
          Contact Sponsor
        </button>

        <div className="flex flex-row gap-5 w-full h-[241px]">
          <div className="w-[940px] h-[270px] p-8 bg-white border border-gray-300 shadow-sm rounded-2xl flex flex-col gap-6">
            <div className="flex flex-row gap-6 w-full h-[147px]">
              <div className="flex flex-col gap-4 w-full">
                <h2 className="text-lg font-semibold text-[#282828]">{sponsor.name || 'TechCorp Solutions'}</h2>
                <p className="text-sm text-[#424242] leading-5">{sponsor.description}</p>
              </div>
            </div>
          </div>

          <div className="w-[325px] h-[270px] p-8 bg-white border border-gray-300 shadow-sm rounded-2xl flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-[#282828]">Contact Information</h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center gap-4">
                <div className="w-9 h-9 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <FaGlobe className="text-blue-600" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700">Website</span>
                  <span className="text-sm text-blue-600">{sponsor.website || 'www.techcorp.com'}</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4">
                <div className="w-9 h-9 bg-green-100 rounded-2xl flex items-center justify-center">
                  <FaEnvelope className="text-green-600" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <span className="text-sm text-black">{sponsor.email || 'contact@techcorp.com'}</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4">
                <div className="w-9 h-9 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <FaPhone className="text-purple-600" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700">Phone</span>
                  <span className="text-sm text-black">{sponsor.phone || '+1 (555) 123-4567'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Representatives Section */}
        <div className="flex flex-row gap-5 w-full">
          <div className="w-[625px] h-[389px] p-10 bg-white border border-gray-300 shadow-sm rounded-2xl flex flex-col gap-10">
            <h2 className="text-2xl font-medium text-[#282828]">Representatives</h2>
            <div className="flex flex-col gap-3">
              {sponsor.representatives?.map((rep: any, index: number) => (
                <div key={index} className="w-full h-18 p-4 bg-white border border-gray-200 shadow-sm rounded-lg flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-3">
                    <Image src={rep.image} alt={rep.name} width={40} height={40} className="rounded-full" />
                    <div className="flex flex-col gap-2">
                      <span className="text-base font-medium text-[#282828]">{rep.name}</span>
                      <span className="text-sm text-gray-600">{rep.company}</span>
                    </div>
                  </div>
                  <span className="text-base font-medium text-red-700">Connect</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[625px] h-[389px] p-10 bg-white border border-gray-300 shadow-sm rounded-2xl flex flex-col gap-10">
            <h2 className="text-2xl font-medium text-[#282828]">Products & Services</h2>
            <div className="flex flex-col gap-3">
              {sponsor.products?.map((product: any, index: number) => (
                <div key={index} className="w-full h-16 p-4 bg-white border border-gray-200 shadow-sm rounded-lg flex flex-row items-center gap-4">
                  <div className="w-9 h-9 bg-blue-100 rounded-2xl flex items-center justify-center">
                    {product.icon}
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="text-base font-medium text-[#282828]">{product.name}</span>
                    <span className="text-sm text-gray-600">{product.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="text-2xl font-medium text-[#282828]">Sessions Sponsored</h2>
          <span className="text-base font-medium text-[#282828] cursor-pointer">View All</span>
        </div>

        <div className="flex flex-row gap-6 w-full h-[419px]">
          {sessions.map((session: any, index: number) => (
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

        {/* Follow Us Section */}
        <div className="flex flex-col items-start gap-4 w-full mt-8 max-w-xs">
          <h2 className="text-2xl font-medium text-[#282828] mb-4">Follow Us</h2>
          <div className='flex flex-row gap-[60px]'>
            <button className="w-full h-12 bg-blue-600 rounded-lg flex items-center justify-center gap-3 flex-none">
              <FaLinkedin className="text-white" />
              <span className="text-base font-normal text-white">LinkedIn</span>
            </button>
            <button className="w-full h-12 bg-blue-400 rounded-lg flex items-center justify-center gap-3 flex-none">
              <FaTwitter className="text-white" />
              <span className="text-base font-normal text-white">Twitter</span>
            </button>
            <button className="w-full h-12 bg-red-500 rounded-lg flex items-center justify-center gap-3 flex-none">
              <FaYoutube className="text-white" />
              <span className="text-base font-normal text-white">Youtube</span>
            </button>
          </div>
        </div>
      </div>

      <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[1910px]" />
    </div>
  )
}

export default SponsorsDetailsScreen
