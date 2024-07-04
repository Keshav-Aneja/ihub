import Image from "next/image";
export default function ActivityCard({
  activity,
  index,
}: {
  activity: { img: string; name: string; description: string };
  index: number;
}) {
  return (
    <div className="flex w-[45%] gap-6 h-full bg-white  card">
      <div className={` w-full md:w-60 rounded-xl overflow-hidden `}>
        <Image
          src={`/${activity.img}`}
          alt={activity.name}
          height={500}
          width={600}
          className="w-full"
        />
      </div>
      <section className={`w-full md:w-[70%] md:h-full`}>
        <div className={`w-full md:w-[75%]`}>
          <h1 className="text-xl md:text-lg lg:text-2xl font-primary font-bold text-primary mb-2">
            {activity.name}
          </h1>
          <p className="text-xs md:text-xs -mt-4 md:mt-0 text-black/70 leading-6 md:text-justify">
            {activity.description}
          </p>
        </div>
      </section>
    </div>
  );
}
