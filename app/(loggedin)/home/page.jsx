import React from "react";

const page = () => {
  const songs = [
    { name: "Jo Tum Mera", imgSrc: "Jotum.jpeg", audioSrc: "/Jotum.mp3" },
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
    <>
      <div className="bg-[#121212] h-[79vh] overflow-y-auto m-1">
        <div className="w-[97%] m-auto py-3">
          <div className="flex items-center gap-2">
            <div className="bg-white text-black px-2 py-1 text-xs rounded-xl">
              All
            </div>
            <div className="bg-[#1F1F1F] text-white px-2 py-1 text-xs rounded-xl">
              Music
            </div>
          </div>
          <div className="py-4 flex gap-2">
            <div className="items-center flex gap-2 w-[350px] bg-[#1F1F1F]">
              <img src="/Frame.svg" width={50} alt="" />{" "}
              <div className="text-sm font-semibold">Liked Songs</div>
            </div>
           
          </div>
          
          <div className="text-lg font-bold">Made for User</div>
          <div className="py-4 flex">
            {songs.map((song)=>{
            return(  <div className="bg-[#121212] w-[150px] h-[200px] hover:bg-[#1F1F1F] rounded-xl px-3 py-3 gap-2 flex flex-col">
              <div>
                <img src={song.imgSrc} width={140} height={100} />
              </div>
              <div className="flex flex-col">
                <span>{song.name}</span>
                <span className="text-xs text-[#A7A7A7]">
                  Description
                </span>
              </div>
            </div>)
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
