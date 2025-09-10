import Link from 'next/link'
import React from 'react'
import Image from "next/image";


export default function page() {
  return (
 <div className="bg-[#9B2033] min-h-screen w-full flex justify-center items-center relative">
      <div className="flex flex-col justify-center items-center">
        <Image src="/images/logo.png" alt="Logo" width={638} height={224} />
       <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[640px] bg-transparent" />

        <div className="mt-12 flex gap-6">
          <Link href="/authentication/SignUp">
            <button className="bg-white text-[#9B2033] px-6 py-2 hover:bg-red-800 hover:text-white rounded transition">
              Sign Up
            </button>
          </Link>
          <Link href="/authentication/SignIn">
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-[#9B2033] transition">
              Sign In
            </button>
          </Link>

        </div>

      </div>

    </div>  )
}
