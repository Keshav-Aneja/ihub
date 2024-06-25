import Image from "next/image";
export default function TeamCard({
  img,
  name,
  small,
  position,
  designation,
}: {
  img: string;
  name: string;
  small?: boolean;
  position?: string;
  designation?: string;
}) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div
        className={`${
          small ? "w-32" : "w-44"
        } aspect-[333/390] bg-dark_bg rounded-lg overflow-hidden`}
      >
        <Image
          src={`/${img}`}
          alt={name}
          width={400}
          height={600}
          className="w-full h-full"
        />
      </div>
      <p className="text-primary text-sm text-center font-bold">{name}</p>
      {position && designation && (
        <div className="text-primary text-sm text-center -mt-2">
          <p>{designation}</p>
          <p>{position}</p>
        </div>
      )}
    </div>
  );
}
