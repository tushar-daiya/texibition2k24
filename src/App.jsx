import React from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Events from "./pages/Events";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Team from "./pages/Team";
import Page404 from "./pages/Page404";
import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const App = () => {
  const [showPrizes, setShowPrizes] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPrizes(true);
    }, 1000);
  }, []);
  return (
    <div className="relative">
      {showPrizes && (
        <div className="fixed left-0 top-0 z-[51] flex h-[100dvh] w-full bg-black bg-opacity-50 backdrop-blur-sm sm:pb-10 sm:pr-10">
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
      )}
      <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
