"use client";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Discover from "./sections/Discover";
import Activities from "./sections/Activities";
import Team from "./sections/Team";
import MRLabs from "./sections/MRLabs";
import MobileNav from "./components/MobileNav";
import Footer from "./sections/Footer";
import { useState } from "react";
import Events from "./sections/Events";
import Projects from "./sections/Projects";
import News from "./sections/News";
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-20">
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNavi={openNavi}
        setOpenNavi={setOpenNavi}
      />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      <Discover activeTab={activeTab} setActiveTab={setActiveTab} />
      <Projects />
      <MRLabs />
      <News />
      <Events />
      <Activities />
      <Team />
      <Footer />
    </main>
  );
}
