import React from "react";

const Date = () => {
  return (
    <div className="datebg  opacity relative z-10 ml-[1.5rem] flex w-fit flex-col rounded-md bg-white py-2 pl-2 pr-4 text-xl font-bold text-black md:ml-10  md:text-3xl">
      <span className=" flex gap-2 text-[2rem] font-bold">
        28
        <b className="text-[16px]">TH</b>
        29
        <b className="text-[16px]">TH</b>
      </span>
      <span className="text-2xl tracking-widest">
        2024 <span>May</span>
      </span>
    </div>
  );
};

export default Date;
