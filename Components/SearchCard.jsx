import React from 'react';

const SearchCard = ({ data }) => {
  console.log(data);

  return (
    <div
      className="h-[130px] rounded-xl px-3 py-3 gap-2 flex flex-col relative"
      style={{ backgroundColor: `${data.color}` }}
    >
      <div className="flex flex-col">
        <div className="w-[150px]  pl-1 font-extrabold text-2xl">
          {data.title}
        </div>
      </div>
          <div className='absolute bottom-0 right-0 w-[80px]'><img src={data.img} alt="" /></div>
    </div>
  );
};

export default SearchCard;
