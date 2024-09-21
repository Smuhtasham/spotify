"use client";
import Link from "next/link";
import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Search from "./Search";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const router = usePathname();
  return (
    <div className="bg-black w-[100] justify-between items-center flex pt-4 pb-2 px-8">
      <div className="flex gap-6 items-center">
        <Link href={"/"}>
          {" "}
          <FaChevronLeft size={18} className="text-[#B3B3B3]" />{" "}
        </Link>
        <Link href={"/search"}>
          {" "}
          <FaChevronRight size={18} className="text-[#B3B3B3]" />{" "}
        </Link>
        <div>{router == "/search" && <Search />}</div>
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href={"/signup"}
          className=" justify-center font-semibold text-center text-[#A7A7A7] rounded px-4 py-2"
        >
          Sign Up
        </Link>
        <Link
          href={"/login"}
          className=" justify-center font-semibold text-center text-black bg-white rounded-3xl px-6 py-3"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
