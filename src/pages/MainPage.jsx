import React from "react";
import Hero from "../components/Hero";
import EventSection from "../components/EventSection";
import Marquee from "../components/Marquee";
import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MainPage = () => {
  // const [showPrizes, setShowPrizes] = React.useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowPrizes(true);
  //   }, 1000);
  // }, []);
  return (
    <div className="relative">
      {/* {showPrizes && (
        <div className="fixed left-0 top-0 z-50 flex h-[100dvh] w-full bg-black bg-opacity-50 backdrop-blur-sm sm:pb-10 sm:pr-10">
          <div className="relative mx-5 ml-auto w-full self-end rounded-2xl px-10 py-8 sm:w-max ">
            <div className="  text-center md:px-5  md:py-4">
              <img
                width={160}
                height={140}
                src="/prizepool.webp"
                alt="prize money"
                className="mx-auto w-40"
              />
              <p className="font-montserrat text-xl font-bold md:text-xl">
                PRIZE POOL
              </p>
              <p className="mt-2 text-6xl font-bold text-primary ">₹30,000+</p>
            </div>
            <IoIosCloseCircleOutline
              onClick={() => setShowPrizes(false)}
              size={40}
              className="absolute right-2 top-2 cursor-pointer text-white"
            />
          </div>
        </div>
      )} */}
      {/* {showPrizes && (
        <div className="prizeMoney fixed left-0 top-20 z-10 h-max w-full bg-primary py-4 text-center transition-all">
          <p className="text-3xl">Prize Money : ₹30,000+</p>
        </div>
      )} */}
      <Hero />
      <EventSection />
      <Marquee />
    </div>
  );
};

export default MainPage;
