import Link from 'next/link'
import React from 'react'

const SignupModel = () => {
  return (
    <div className="w-[100%] pt-2 px-2">
        <div className="justify-between items-center  pr-4 pt-1 pl-1 pb-2  flex bg-gradient-to-r from-[#AF2896] to-[#509BF5]">
        <div className="flex flex-col text-sm px-2 py-2">
          <div className="text-sm font-bold">Preview Of Spotify</div>
          <div className="font-medium">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </div>
        </div>
          <Link href={"/signup"} 
          className=" rounded-3xl py-2 px-4 text-black text-sm font-bold bg-white cursor-pointer">
          Sign up free
          </Link>
          </div>
      </div>
  )
}

export default SignupModel