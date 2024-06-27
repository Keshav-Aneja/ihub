import React, { useEffect, useState } from "react";
import Image from "next/image";
import { events } from "../data/events";

export default function Carousel() {
  const length = events.length;
  const [currImage, setCurrImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const handleNextClick = () => {
    setCurrImage((prevCurrImage) => (prevCurrImage + 1) % length);
  };

  const handlePrevClick = () => {
    setCurrImage((prevCurrImage) => (prevCurrImage - 1 + length) % length);
  };

  const prevImage = (currImage - 1 + length) % length;
  const nextImage = (currImage + 1) % length;
  useEffect(() => {
    setInterval(() => {
      if (!isHovering) handleNextClick();
    }, 2000);
  }, []);
  return (
    <div className="w-full min-h-[60vh]">
      <section className="flex justify-center items-center">
        <div className="w-[35%] aspect-[500/333] rounded-xl border-[3px] border-black/50 shadow-[0px_10px_20px_rgba(0,0,0,0.5)] bg-white z-[50] relative left-[18%] ">
          <Image
            src={`/${events[prevImage].img}`}
            alt={events[prevImage].name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            className="absolute top-1/2 -translate-y-1/2 left-[30%] rotate-90 invert cursor-pointer"
            src="/caret-down.png"
            alt="Previous"
            width={60}
            height={60}
            onClick={handlePrevClick}
          />
        </div>
        <div className="w-[40%] aspect-[500/333] rounded-xl border-[3px] border-black/50 shadow-[0px_10px_20px_rgba(0,0,0,0.5)] bg-white relative z-[100] overflow-hidden">
          <Image
            src={`/${events[currImage].img}`}
            alt={events[currImage].name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[35%] aspect-[500/333] rounded-xl border-[3px] border-black/50 shadow-[0px_10px_20px_rgba(0,0,0,0.5)] bg-white z-[50] relative right-[18%]">
          <Image
            src={`/${events[nextImage].img}`}
            alt={events[nextImage].name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            onClick={handleNextClick}
          />
          <Image
            className="absolute top-1/2 -translate-y-1/2 right-[30%] -rotate-90 invert cursor-pointer"
            src="/caret-down.png"
            alt="Next"
            width={60}
            height={60}
            onClick={handleNextClick}
          />
        </div>
      </section>
    </div>
  );
}
