"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainLeftpanel = () => {
    const router = usePathname();
  return (
    <>
    <div className="w-[95%] m-auto">
        {/*-------------------- LOGO SPOTIFY---------------- */}
        <div className="bg-[#121212] mt-2 rounded-lg py-4 px-6">
        <Link href={"/"}>
          <Image alt="wow" src="/spotify.svg" width={90} height={90}></Image>
        </Link>
        {/* ------------OPTIONS------------ */}
        <div className="flex flex-col gap-4 py-4 font-bold text-sm">
          <Link
            href={"/"}
            className={`flex gap-4 items-center cursor-pointer ${
              router == "/" ? "text-white" : "text-[#B3B3B3]"
            } `}
          >
            <Image alt="wow" src="/home.svg" width={25} height={25}></Image>{" "}
            <div>Home</div>
          </Link>
          <Link
            href={"/search"}
            className={`flex gap-4 items-center cursor-pointer ${
              router == "/search" && "text-white"
            } text-[#B3B3B3]`}
          >
            <Image alt="wow" src="/search.svg" width={25} height={25}></Image>{" "}
            <div>Search</div>
          </Link>
          
        </div></div>
        {/* --------------OPTIONS2-------------- */}
        <div className="flex flex-col gap-4 py-4 px-4 rounded-lg mt-2 bg-[#121212] font-bold text-[#B3B3B3]">
        <Link
            href={"/librarypage"}
            className={`flex pl-2 w-[60%] gap-4 items-center cursor-pointer ${
              router == "/librarypage" && "text-white"
            } text-[#B3B3B3]`}
          >
            <Image alt="wow" src="/library.svg" width={25} height={25}></Image>{" "}
            <div>Your Library</div>
          </Link>
          <div className="flex text-sm items-center gap-4">
            <Image alt="wow" src="/add.svg" width={25} height={25}></Image>
            <div>Create Playlist</div>
          </div>
          <div className="flex text-sm items-center gap-4">
            <Image alt="wow" src="/liked.svg" width={25} height={25}></Image>
            <div>Liked Songs</div>
          </div>
        </div>
        {/* -------------PRIVACY OPTIONS---------------- */}
        <div className="flex flex-col bg-[#121212] mt-2 rounded-lg px-4 gap-4 py-6">
          <div className="flex flex-col  gap-2 text-[10px]">
            <span>
              Legal <span className="pl-4">Privacy Center</span>{" "}
            </span>
            <span>
              Privacy Policy <span className="pl-4">Cookies</span>
            </span>
            <span className="flex gap-2 items-center">
              About Ads{" "}
              <Image alt="wow" src="/tick.svg" width={20} height={20}></Image>{" "}
            </span>
            <span>Cookies</span>
          </div>
          <div className="flex border w-[30%] text-sm font-bold justify-center items-center gap-1 px-2 py-1 rounded-2xl border-white">
            <Image alt="wow" src="/world.svg" width={18} height={20}></Image>{" "}
            English
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLeftpanel