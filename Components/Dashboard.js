"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./HomeCard";
import HomeCard from "./HomeCard";
import { useSession } from "next-auth/react";

const dummyData = [
  {
    src: "/grid1.svg",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces.",
  },
  {
    src: "/grid2.svg",
    title: "Deep Focus",
    description: "Keep calm and focus with ambient and post-rock music.",
  },
  {
    src: "/grid3.svg",
    title: "Instrumental Study",
    description: "Focus with soft study music in the background.",
  },
  {
    src: "/grid4.svg",
    title: "Jazz Vibes",
    description: "The original chill instrumental beats playlist.",
  },
  {
    src: "/grid5.svg",
    title: "Focus Flow",
    description: "Uptempo instrumental hip hop beats.",
  },
  {
    src: "/grid6.svg",
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits.",
  },
  {
    src: "/grid1.svg",
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
  },
];

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  return (
    <>
      <div className=" bg-[#121212] px-6 flex flex-col">
        <div className="flex flex-col pt-10">
          <div className="flex justify-between font-bold pb-4">
            <div>Focus</div>
            <div className="text-xs text-[#A7A7A7]">Show all</div>
          </div>
          <div className="w-[100%] overflow-hidden">
            <Swiper
              spaceBetween={5}
              slidesPerView={6}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {dummyData.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <HomeCard data={data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div className="flex justify-between font-bold pb-4">
            <div>Spotify Playlist</div>
            <div className="text-xs text-[#A7A7A7]">Show all</div>
          </div>
          <div className="w-[100%] overflow-hidden">
            <Swiper
              spaceBetween={5}
              slidesPerView={6}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {dummyData.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card data={data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
