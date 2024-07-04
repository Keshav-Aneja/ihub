import React, { useState } from "react";
import Heading from "../components/Heading";
import Carousel from "../components/Carousel";
import { news } from "../data/news";
export default function News() {
  const [selectedNews, setSelectedNews] = useState(0);
  return (
    <div
      className="w-full min-h-[70vh] h-fit bg-light_bg flex flex-col gap-8"
      id="events"
    >
      <Heading heading="News" />
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-between h-fit">
        <section className="flex flex-col w-full lg:w-[30%]  pr-4">
          <h1 className="text-primary text-lg md:text-xl lg:text-2xl font-medium">
            News
          </h1>
          <ul className="flex flex-col gap-4 mt-4">
            {news.map((news, index) => (
              <li
                className="text-xs md:text-sm border-l-[2px] border-primary pl-2  cursor-pointer"
                key={index}
                onClick={() => setSelectedNews(index)}
              >
                {news.title}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full md:w-[70%] h-full flex items-center justify-center">
          <div className="w-[70%] h-72 rounded-xl shadow-lg border-2 border-primary/40 p-4 flex flex-col gap-4">
            <h1 className="font-medium">{news[selectedNews].title}</h1>
            <p className="text-xs">{news[selectedNews].description}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
