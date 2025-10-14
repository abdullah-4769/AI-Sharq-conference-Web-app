'use client'

import React, { useEffect, useState } from 'react'
import api from '@/config/api'
import { FaUser } from 'react-icons/fa'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store'
import { useRouter } from 'next/navigation'
const SponsorProfileView: React.FC = () => {

    const [sponsor, setSponsor] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)
  const router = useRouter()
  const sponsorId = useSelector((state: RootState) => state.sponsor.sponsorId)

    useEffect(() => {
        const fetchSponsor = async () => {
            if (!sponsorId) return
            setLoading(true)
            try {
                const res = await api.get(`/sponsors/${sponsorId}`)
                setSponsor(res.data)
            } catch (err) {
                console.log('Error fetching sponsor', err)
            } finally {
                setLoading(false)
            }
        }

        fetchSponsor()
    }, [sponsorId])

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>
    }

    if (!sponsor) {
        return <div className="flex justify-center items-center min-h-screen">Sponsor not found</div>
    }

    return (

        <>
            <div className="relative flex flex-col items-center min-h-screen bg-gray-50 p-4">
                {/* Main Card */}
                <div className="bg-white border border-gray-300 rounded-2xl shadow-lg p-10 w-full max-w-5xl mb-16">
                    <div className="flex flex-col items-center gap-8">
                        {/* Logo */}
                        <div className="relative flex flex-col items-center my-4">
                            {/* Edit button pinned to bottom-right of the whole div */}
                            <button
                                type="button"
                                onClick={() => window.location.href = '/sponsors/edit'}
                                className="absolute bottom-10 right-0 p-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652l-9.193 9.193a4.5 4.5 0 01-1.897 1.13l-3.323.94.94-3.323a4.5 4.5 0 011.13-1.897l9.193-9.193z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 7.125L16.875 4.5"
                                    />
                                </svg>
                            </button>

                            {/* Logo center aligned */}
                            <div className="w-32 h-32 bg-red-100 border-4 border-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
                                {sponsor.Pic_url ? (
                                    <img
                                        src={sponsor.Pic_url}
                                        alt="Logo"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <FaUser className="text-4xl text-red-600" />
                                )}
                            </div>

                            <p className="text-base text-gray-900 text-center mt-2">Sponsor Logo</p>
                        </div>



                        {/* Profile Info */}
                        <div className="flex flex-col gap-6 w-full">
                            <div>
                                <p className="font-bold p-1">Sponsor Name</p>

                                <p className="px-4 py-3 border border-gray-300 rounded-xl">{sponsor.name}</p>
                            </div>

                            <div>
                                <p className="font-bold p-1">Email</p>
                                <p className="px-4 py-3 border border-gray-300 rounded-xl">{sponsor.email}</p>
                            </div>

                            <div>
                                <p className="font-bold p-1">Phone</p>
                                <p className="px-4 py-3 border border-gray-300 rounded-xl">{sponsor.phone}</p>
                            </div>

                            <div>
                                <p className="font-bold p-1">Category</p>
                                <p className="px-4 py-3 border border-gray-300 rounded-xl">{sponsor.category}</p>
                            </div>

                            <div>
                                <p className="font-bold p-1">Website</p>
                                <a
                                    href={sponsor.website}
                                    target="_blank"
                                    className="px-4 py-3 border border-gray-300 rounded-xl text-red-600 hover:underline block"
                                >
                                    {sponsor.website}
                                </a>
                            </div>

                            <div>
                                <p className="font-bold p-1">Description</p>
                                <p className="px-4 py-3 border border-gray-300 rounded-xl">{sponsor.description}</p>
                            </div>

                            {/* Socials */}
                            <div className="flex gap-6 mt-6 justify-center">
                                {sponsor.linkedin && (
                                    <a
                                        href={sponsor.linkedin}
                                        target="_blank"
                                        className="text-blue-700 hover:text-blue-900 text-2xl"
                                    >
                                        <FaLinkedin />
                                    </a>
                                )}
                                {sponsor.twitter && (
                                    <a
                                        href={sponsor.twitter}
                                        target="_blank"
                                        className="text-blue-500 hover:text-blue-700 text-2xl"
                                    >
                                        <FaTwitter />
                                    </a>
                                )}
                                {sponsor.youtube && (
                                    <a
                                        href={sponsor.youtube}
                                        target="_blank"
                                        className="text-red-600 hover:text-red-800 text-2xl"
                                    >
                                        <FaYoutube />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative line at bottom */}

            </div>
            <div className="w-full flex justify-center fix bottom-0">
                <Image
                    src="/images/line.png"
                    alt="Line"
                    width={1450}
                    height={127}
                    className="w-full max-w-screen-xl"
                />
            </div>

        </>
    )
}

export default SponsorProfileView
