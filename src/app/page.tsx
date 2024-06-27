"use client";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Discover from "./sections/Discover";
import Activities from "./sections/Activities";
import Team from "./sections/Team";
import MRLabs from "./sections/MRLabs";
import Footer from "./sections/Footer";
import { useState } from "react";
import Events from "./sections/Events";
export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      <Discover activeTab={activeTab} setActiveTab={setActiveTab} />
      <MRLabs />
      <Events />
      <Activities />
      <Team />
      <Footer />
    </main>
  );
}
