"use client";
import React, { useState } from "react";
import LogedinLeftpanel from "./LogedinLeftpanel";
import MainLeftpanel from "./MainLeftpanel";
import { useSession } from "next-auth/react";

const LeftPanel = () => {
  const session = useSession();
  return (
    <>
      {session.status == "authenticated" ? (
        <LogedinLeftpanel />
      ) : (
        <MainLeftpanel />
      )}
    </>
  );
};

export default LeftPanel;
