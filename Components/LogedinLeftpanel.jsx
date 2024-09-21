import React from "react";
import { IoIosAdd } from "react-icons/io";
import { IoIosOptions } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const LogedinLeftpanel = () => {
  const songs = [
    {
      name: "Jo Tum Mera Ho",
      imgSrc: "Jotum.jpeg",
      audioSrc: "/Jotum.mp3",
    },
    {
      name: "JAAN - Slowed & Reverb MP3",
      imgSrc: "Jaan.jpeg",
      audioSrc: "/Jaan.mp3",
    },
    {
      name: "Jhol - Slowed & Reverb MP3",
      imgSrc: "Jhol.jpeg",
      audioSrc: "/jhol.mp3",
    },
    {
      name: "MY Prime - Slowed & Reverb MP3",
      imgSrc: "Prime.jpg",
      audioSrc: "/prime.mp3",
    },
  ];

  return (
    <div className="bg-[#121212] m-1 rounded-lg">
      <div className="w-[90%] m-auto">
        <div className="rounded-xl h-[79vh]">
          <div className="flex px-2 py-2 justify-between items-center">
            <div className="flex gap-2 text-sm items-center font-semibold">
              <img src="/library.svg" alt="" />
              Your Library
            </div>
            <div className="flex items-center gap-2">
              <IoIosAdd size={30} />
              <FaArrowRight />
            </div>
          </div>
          <div className=" w-[20%] py-2">
            <span className="bg-[#333333] text-xs font-semibold py-1 px-2 rounded-xl">
              Artists
            </span>
          </div>
          <div className="px-2 py-2 flex justify-between">
            <img src="/search.svg" width={15} alt="" />{" "}
            <div className="text-xs flex items-center gap-1">
              Recents <IoIosOptions size={15} />
            </div>
          </div>
          <div className="test-sm flex py-2">
            {" "}
            <img src="/Frame.svg" width={40} alt="" />{" "}
            <div className="py-1 text-sm px-2">Likes Songs</div>
          </div>
          <div className="flex flex-col gap-2">
            {songs.map((song, index) => {
              return (
                <div
                  className="flex text-white gap-2 items-center "
                  key={index}
                >
                  <img src={song.imgSrc} width={40} alt="" />
                  {song.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogedinLeftpanel;
