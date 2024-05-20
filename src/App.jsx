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
import Marquee from "react-fast-marquee";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="mt-20 w-full bg-primary py-2 text-xl">
        <Marquee delay={2} pauseOnHover>
          We apologize for the inconvenience. The transaction issue has been
          resolved. Please try again using the QR code on the
          registration forms. &nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>
      <div className="">
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
