"use client"
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import Search from "./Search";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineDownloading } from "react-icons/md";
import UserDrop from '../Components/UserDrop'
import { FaRegUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import ProfileBtn from "../Components/ProfileBtn"

const LoginNavbar = () => {
  const session = useSession();
  const [ProfileDropDown,setProfileDropDown]= useState(false);
  return (
    <>
      <div>
        <div className="flex w-[98%] m-auto justify-between items-center py-2">
          <div className="w-[25%]">
            <FaSpotify size={30} />
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <img src="/home.svg" alt="" />
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-4 items-center">
              <div>
                <button className="bg-white text-xs font-bold rounded-xl py-1 px-2 text-black">
                  Explore Premium
                </button>
              </div>
              <div>
                <button className="text-xs font-bold flex items-center gap-1">
                  <MdOutlineDownloading size={15} />
                  Install App
                </button>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div >
                <CiBellOn size={20} />
              </div>
              <div 
              onClick={()=>setProfileDropDown(!ProfileDropDown)} 
                className=" rounded-full  cursor-pointer relative"
                
              >
                { session.data?.user?.loginType == "facebook" || session.data?.user?.loginType == "google"  ? <ProfileBtn /> : <FaRegUserCircle /> }
                <UserDrop ProfileDropDown = {ProfileDropDown} />
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default LoginNavbar;
