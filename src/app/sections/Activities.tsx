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
      <section>
        <div className="scrolling-wrapper-flexbox gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} index={index} activity={activity} />
          ))}
        </div>
      </section>
    </div>
  );
}
