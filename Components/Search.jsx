import React from "react";

const Search = () => {
  return (
    <>
      <div className="bg-[#2A2A2A] w-[350px] flex gap-1 px-4 py-2 rounded-3xl">
        <img className="size-5" src="/search.svg" alt="" />
        <input
          className="bg-[#2A2A2A] px-1 text-sm text-[#757575] outline-none"
          type="text"
          placeholder="What do you want to play?"
        />
      </div>
    </>
  );
};

export default Search;
