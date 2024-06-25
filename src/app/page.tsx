"use client";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Discover from "./sections/Discover";
import Activities from "./sections/Activities";
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins">
      <Navbar />
      <Hero />
      <Discover />
      <Activities />
    </main>
  );
}
