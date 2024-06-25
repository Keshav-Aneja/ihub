import Heading from "../components/Heading";
import { activities } from "../data/activities";
import Image from "next/image";
export default function Activities() {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-8">
      <Heading heading="Activities" />
      <section className="flex flex-col gap-20">
        {activities.map((activity, index) => (
          <div className="w-full flex gap-20" key={index}>
            <section
              className={`w-[50%] h-full ${index % 2 === 0 && "order-1"}`}
            >
              <h1 className="text-3xl font-primary font-bold">
                {activity.name}
              </h1>
              <p className="text-sm text-black/70">{activity.description}</p>
            </section>
            <section className="w-[50%] h-full">
              <div className="w-full aspect-[500/333] rounded-xl overflow-hidden bg-dark_bg">
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
