import Heading from "../components/Heading";
import { activities } from "../data/activities";
import Image from "next/image";
export default function Activities() {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-8" id="activity">
      <Heading heading="Activities" />
      <section className="flex flex-col gap-20">
        {activities.map((activity, index) => (
          <div className="w-full flex gap-20" key={index}>
            <section
              className={`w-[50%] h-full ${index % 2 === 0 && "order-1"}`}
            >
              <div
                className={`${
                  index % 2 === 0 ? "float-left" : "float-right"
                } w-[75%]`}
              >
                <h1 className="text-3xl font-primary font-bold text-primary mb-6">
                  {activity.name}
                </h1>
                <p className="text-sm text-black/70 leading-6 text-justify">
                  {activity.description}
                </p>
              </div>
            </section>
            <section className="w-[50%] h-full">
              <div
                className={`${
                  index % 2 === 0 && "float-right"
                } w-[75%] aspect-[500/333] rounded-xl overflow-hidden bg-dark_bg`}
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
        ))}
      </section>
    </div>
  );
}
