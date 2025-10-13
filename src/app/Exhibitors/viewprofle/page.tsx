'use client'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store'
import { useRouter } from 'next/navigation'
import api from '@/config/api'
import Image from 'next/image'
import { FaUser, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const ExhibitorProfileView: React.FC = () => {
  const router = useRouter()
  const exhibitorId = useSelector((state: RootState) => state.exhibitor.exhibitorId)
  const [exhibitor, setExhibitor] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchExhibitor = async () => {
      if (!exhibitorId) return
      setLoading(true)
      try {
        const res = await api.get(`/exhibiteros/${exhibitorId}`)
        setExhibitor(res.data)
      } catch (err) {
        console.log('Error fetching exhibitor', err)
      } finally {
        setLoading(false)
      }
    }
    fetchExhibitor()
  }, [exhibitorId])

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (!exhibitor) {
    return <div className="flex justify-center items-center min-h-screen">Exhibitor not found</div>
  }

  return (
    <>
      <div className="relative flex flex-col items-center min-h-screen bg-gray-50 p-4">
        <div className="relative bg-white border border-gray-300 rounded-2xl shadow-lg p-10 w-full max-w-5xl mb-16">

          <button
            type="button"
            onClick={() => router.push('/Exhibitors/edit')}
            className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652l-9.193 9.193a4.5 4.5 0 01-1.897 1.13l-3.323.94.94-3.323a4.5 4.5 0 011.13-1.897l9.193-9.193z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.875 4.5" />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-8">
            <div className="relative flex flex-col items-center my-4">
              <div className="w-32 h-32 bg-red-100 border-4 border-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
                {exhibitor.picUrl ? (
                  <img src={exhibitor.picUrl} alt="Logo" className="w-full h-full object-cover" />
                ) : (
                  <FaUser className="text-4xl text-red-600" />
                )}
              </div>
              <p className="text-base text-gray-900 text-center mt-2">Exhibitor Logo</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <p className="font-bold p-1">Exhibitor Name</p>
                <p className="px-4 py-3 border border-gray-300 rounded-xl">{exhibitor.name}</p>
              </div>

              <div>
                <p className="font-bold p-1">Email</p>
                <p className="px-4 py-3 border border-gray-300 rounded-xl">{exhibitor.email}</p>
              </div>

              <div>
                <p className="font-bold p-1">Phone</p>
                <p className="px-4 py-3 border border-gray-300 rounded-xl">{exhibitor.phone}</p>
              </div>

              <div>
                <p className="font-bold p-1">Location</p>
                <p className="px-4 py-3 border border-gray-300 rounded-xl">{exhibitor.location}</p>
              </div>

              <div>
                <p className="font-bold p-1">Website</p>
                <a href={exhibitor.website} target="_blank" className="px-4 py-3 border border-gray-300 rounded-xl text-red-600 hover:underline block">
                  {exhibitor.website}
                </a>
              </div>

              <div>
                <p className="font-bold p-1">Description</p>
                <p className="px-4 py-3 border border-gray-300 rounded-xl">{exhibitor.description}</p>
              </div>
            </div>

            <div className="flex gap-6 mt-6 justify-center">
              {exhibitor.linkedin && (
                <a href={exhibitor.linkedin} target="_blank" className="text-blue-700 hover:text-blue-900 text-2xl">
                  <FaLinkedin />
                </a>
              )}
              {exhibitor.twitter && (
                <a href={exhibitor.twitter} target="_blank" className="text-blue-500 hover:text-blue-700 text-2xl">
                  <FaTwitter />
                </a>
              )}
              {exhibitor.youtube && (
                <a href={exhibitor.youtube} target="_blank" className="text-red-600 hover:text-red-800 text-2xl">
                  <FaYoutube />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center fixed bottom-0">
        <Image src="/images/line.png" alt="Line" width={1450} height={127} className="w-full max-w-screen-xl" />
      </div>
    </>
  )
}

export default ExhibitorProfileView
