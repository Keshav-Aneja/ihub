"use client";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Discover from "./sections/Discover";
import Activities from "./sections/Activities";
import Team from "./sections/Team";
import MRLabs from "./sections/MRLabs";
import Footer from "./sections/Footer";
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <Navbar />
      <Hero />
      <Discover />
      <MRLabs />
      <Activities />
      <Team />
      <Footer />
    </main>
  );
}
