import Image from "next/image";
export default function ActivityCard({
  activity,
  index,
  projectCard,
}: {
  activity: { img: string; name: string; description?: string };
  index: number;
  projectCard?: boolean;
}) {
  return (
    <div className="flex flex-col w-[40%] gap-6 h-full bg-white  card">
      <div className={` w-full rounded-xl  `}>
        <Image
          src={`/${activity.img}`}
          alt={activity.name}
          height={500}
          width={600}
          className="w-full h-full"
        />
      </div>
      <section className={`w-full md:h-full`}>
        <div className={`w-full`}>
          <h1
            className={`text-xl md:text-lg lg:text-2xl font-primary font-bold text-primary mb-2 ${
              projectCard && "text-center"
            }`}
          >
            {activity.name}
          </h1>
          {!projectCard && (
            <p className="text-xs md:text-xs -mt-4 md:mt-0 text-black leading-6 md:text-justify">
              {activity.description}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
