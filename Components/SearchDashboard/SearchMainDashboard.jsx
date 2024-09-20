"use client";
import React from "react";
import LeftPanel from "../LeftPanel";
import SearchDashboard from "../SearchDashboard";
import Model from "../Model";
import { useSearchParams } from "next/navigation";

const SearchMainDashboard = () => {
  return (
    <>
      <SearchDashboard />
    </>
  );
};

export default SearchMainDashboard;
