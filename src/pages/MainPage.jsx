import React from "react";
import Hero from "../components/Hero";
import EventSection from "../components/EventSection";
import Marquee from "../components/Marquee";
import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Heading from "../components/Heading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MainPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from("#sponsors", {
      duration: 1,
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: document.getElementById("sponsors"),
        start: "top 80%",
      },
      ease: "power2.out",
    });
  });
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
          <div className="relative mx-5 w-full self-end rounded-2xl px-10 py-8 sm:ml-auto sm:w-max ">
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
        <div className="fixed left-0 top-0 z-50 flex h-[100dvh] w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm sm:pb-10 sm:pr-10">
          <div className="relative mx-5 w-full rounded-2xl bg-white bg-opacity-5 px-10 py-8 backdrop-blur-lg sm:w-max ">
            <p className="mb-4 text-center font-alata text-4xl font-bold text-primary">
              Food Sponsor
            </p>
            <div className="  text-center md:px-5  md:py-4">
              <img
                width={500}
                height={200}
                src="/sponsor.webp"
                alt="sponsor"
                className="mx-auto w-[500px]"
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
      <div className="border-b-2 border-solid border-white/10 pb-10">
        <div id="sponsors">
          <Heading text="Sponsors" />
          <img src="/sponsors.png" alt="sponsors" className="mx-auto w-80" />
        </div>
      </div>
      <EventSection />
      <Marquee />
    </div>
  );
};

export default MainPage;
