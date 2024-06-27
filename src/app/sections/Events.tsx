import React from "react";
import Heading from "../components/Heading";
import Carousel from "../components/Carousel";
export default function Events() {
  return (
    <div className="w-full h-fit bg-light_bg flex flex-col gap-8" id="events">
      <Heading heading="Events" />
      <Carousel />
    </div>
  );
}
