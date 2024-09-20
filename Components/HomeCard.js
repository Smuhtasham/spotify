import React from "react";

const HomeCard = ({ data }) => {
  return (
    <>
      <div className="bg-[#121212] h-[255px] hover:bg-[#1F1F1F] rounded-xl px-3 py-3 gap-2 flex flex-col">
        <div>
          <img src={data.src} width={140} height={100}/>
        </div>
        <div className="flex flex-col">
          <span>{data.title}</span>
          <span className="text-xs text-[#A7A7A7]">{data.description}</span>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
