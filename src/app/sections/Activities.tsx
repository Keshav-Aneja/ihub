import ActivityCard from "../components/AcitivtyCard";
import Heading from "../components/Heading";
import { activities } from "../data/activities";
import Image from "next/image";
export default function Activities() {
  return (
    <div
      className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-8"
      id="activity"
    >
      <Heading heading="Activities" />
      <section className="flex flex-col gap-10 md:gap-16 lg:gap-20">
        <div className="scrolling-wrapper-flexbox">
          {activities.map((activity, index) => (
            <ActivityCard key={index} index={index} activity={activity} />
          ))}
        </div>

        {/* {activities.map((activity, index) => (
          <>
            <div
              className="w-full flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20"
              key={index}
            >
              <section
                className={`w-full md:w-[50%] md:h-full ${
                  index % 2 === 0 && "md:order-1"
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "md:float-left" : "md:float-right"
                  } w-full md:w-[75%]`}
                >
                  <h1 className="text-xl md:text-lg lg:text-3xl font-primary font-bold text-primary mb-6">
                    {activity.name}
                  </h1>
                  <p className="text-xs md:text-sm -mt-4 md:mt-0 text-black/70 leading-6 md:text-justify">
                    {activity.description}
                  </p>
                </div>
              </section>
              <section className="w-full md:w-[50%] md:h-full">
                <div
                  className={`${
                    index % 2 === 0 && "md:float-right"
                  } w-full md:w-[75%] aspect-[500/333] rounded-xl overflow-hidden bg-dark_bg`}
                >
                  <Image
                    src={`/${activity.img}`}
                    alt={activity.name}
                    height={500}
                    width={600}
                    className="w-full h-full"
                  />
                </div>
              </section>
            </div>
            <div className="w-full h-[1px] bg-primary"></div>
          </>
        ))} */}
      </section>
    </div>
  );
}
