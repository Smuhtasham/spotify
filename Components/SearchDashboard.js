import React from "react";
import SearchCard from "./SearchCard";

const SearchDashboard = () => {
  const dummydata = [
    {
      title: "Live Events",
      color:"#8400E7",
      img:"/grid1i.svg"
    },
    {
      title: "Made For You",
      color:"#1E3264",
      img:"/grid2i.svg"
    },
    {
      title: "New Releases",
      color:"#608108",
      img:"/grid3i.svg"
    },
    {
      title: "Desi",
      color:"#E13300",
      img:"/grid4i.svg"
    },
    {
      title: "Pop",
      color:"#477D95",
      img:"/grid5i.svg"
    },
    {
      title:"Summer",
      color:"#27856A",
      img:"/grid6i.svg"
    },
    {
      title: "Hip-Hop",
      color:"#477D95",
      img:"/grid7i.svg"
    },
    {
      title:"Educational",
      color:"#477D95",
      img:"/grid8i.svg"
    },
    {
      title:"Documentry",
      color:"#503750",
      img:"/grid9i.svg"
    },
    {
      title:"Comedy",
      color:"#AF2896",
      img:"/grid10i.svg"
    },
    {
      title:"Pop Culture",
      color:"#477D95",
      img:"/grid11i.svg"
    },
    {
      title:"Charts",
      color:"#DC148C",
      img:"/grid1i.svg"
    },
    {
      title:"Punjabi",
      color:"#DC148C",
      img:"/grid2i.svg"
    },
    {
      title:"EQUAL",
      color:"#8D67AB",
      img:"/grid3i.svg"
    },
    {
      title:"Indie",
      color:"#8400E7",
      img:"/grid4i.svg"
    },
    {
      title:"Fresh Finds",
      color:"#1E3264",
      img:"/grid5i.svg"
    },
    {
      title:"Discover",
      color:"#608108",
      img:"/grid6i.svg"
    },
    {
      title:"Rock",
       color:"#E13300",
      img:"/grid7i.svg"
    },
    {
      title:"Latin",
      color:"#477D95",
      img:"/grid8i.svg"
    },
    {
      title:"Dance/Electronic",
      color:"#27856A",
      img:"/grid9i.svg"
    },
    {
      title:"Mood",
      color:"#477D95",
      img:"/grid10i.svg"
    },
    {
      title:"Workout",
      color:"#503750",
      img:"/grid11i.svg"
    },
    {
      title:"Country",
      color:"#8400E7",
      img:"/grid1i.svg"
    },
  ];
  return (
    <>
      <div className="bg-[#121212] py-16 px-6 flex flex-col gap-4">
        <div className="text-2xl font-bold">Browse all</div>
        <div className=" grid grid-cols-4 gap-6">
        {dummydata.map((data) => {
                return ( <SearchCard data={data}/>    );
              })}
            
            
          </div>
        </div>
    </>
  );
};

export default SearchDashboard;
