"use client";
import React, { useState } from "react";
import SignupModel from "./SignupModel";
import MusicModel from "./MusicModel";
import { useSession } from "next-auth/react";

const Model = () => {
  const session = useSession();
  return (
    <>{session.status == "authenticated" ? <MusicModel /> : <SignupModel />}</>
  );
};

export default Model;
