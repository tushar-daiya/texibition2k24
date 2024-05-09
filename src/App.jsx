import React from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";


const App = () => {
  
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/event/:eventId" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
