import React from "react";
import Hero from "../components/Hero";
import EventSection from "../components/EventSection";
import Marquee from "../components/Marquee";
import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MainPage = () => {
  const [showPrizes, setShowPrizes] = React.useState(false);
  const [showSponsor, setShowSponsor] = React.useState(false);

  useEffect(() => {
    const isPopupShown = sessionStorage.getItem("isPopupShown");
    if (isPopupShown) {
      return;
    }
    setTimeout(() => {
      setShowPrizes(true);
      sessionStorage.setItem("isPopupShown", true);
    }, 1000);
  }, []);
  const closePopup = () => {
    setShowPrizes(false);
    setTimeout(() => setShowSponsor(true), 500);
  };
  return (
    <div className="relative">
      {showPrizes && (
        <div className="fixed left-0 top-0 z-50 flex h-[100dvh] w-full bg-black bg-opacity-50 backdrop-blur-sm sm:pb-10 sm:pr-10">
          <div className="relative mx-5 sm:ml-auto w-full self-end rounded-2xl px-10 py-8 sm:w-max ">
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
              onClick={closePopup}
              size={40}
              className="absolute right-2 top-2 cursor-pointer text-white"
            />
          </div>
        </div>
      )}
      {showSponsor && (
        <div className="fixed left-0 top-0 z-50 flex h-[100dvh] w-full bg-black bg-opacity-50 backdrop-blur-sm sm:pb-10 sm:pr-10">
          <div className="relative mx-5 w-full self-end rounded-2xl bg-white bg-opacity-10 px-10 py-8 backdrop-blur-lg sm:ml-auto sm:w-max sm:bg-opacity-100 sm:bg-transparent sm:backdrop-blur-none sm:backdrop-filter-none ">
            <p className="mb-4 text-center text-primary font-alata text-4xl font-bold">
              Food Sponsor
            </p>
            <div className="  text-center md:px-5  md:py-4">
              <img
                width={320}
                height={128}
                src="/sponsor.webp"
                alt="sponsor"
                className="mx-auto w-80"
              />
              <p className="mt-4 max-w-[40ch] text-xl font-bold ">
                Join us on the 28th and the 29th of May in the Texibition Fest
                to enjoy a burst of Flavours! See you there.
              </p>
            </div>
            <IoIosCloseCircleOutline
              onClick={() => setShowSponsor(false)}
              size={40}
              className="absolute right-2 top-2 cursor-pointer text-white"
            />
          </div>
        </div>
      )}

      <Hero />
      <EventSection />
      <Marquee />
    </div>
  );
};

export default MainPage;
