import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const UserDrop = ({ ProfileDropDown }) => {
  return (
    <div
      className={`z-[400000] absolute w-[160px] h-[160px] dark:border dark:border-[#222] px-2 py-2 flex flex-col gap-4 rounded-[6px] text-[#f7f7f7] right-[10px] text-xs bottom-[-185px] shadow-md bg-[#3e3e3e] chat-options ${
        ProfileDropDown ? "show" : "hide"
      }`}
    >
      <Link href={"/Account"}>Account</Link>
      <Link href={"/Profile"}>Profile</Link>
      <Link href={"/Premium"}>Upgrade to Premium</Link>
      <Link href={"/Setting"}>Setting</Link>
      <div>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
      </div>
    </div>
  );
};

export default UserDrop;
