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
    <div className="p-2 flex flex-col items-center">
      <div
        className={`${
          small ? "w-32" : "w-44"
        } aspect-[333/390] bg-dark_bg  overflow-hidden relative rounded-md`}
      >
        <Image
          src={`/${img}`}
          alt={name}
          width={400}
          height={600}
          className="w-full h-full"
        />
        {small && (
          <>
            <p
              className={`text-white text-xs absolute bottom-2 left-0 z-[100] text-center w-full`}
            >
              {name}
            </p>
            <div className="w-full h-[35%] bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)] absolute bottom-0 left-0 z-[80] "></div>
          </>
        )}
      </div>
      <p
        className={`${
          small ? "hidden" : "text-primary"
        } text-sm text-center font-bold mt-1`}
      >
        {name}
      </p>
      {position && designation && (
        <div className="text-primary text-sm text-center mt-2">
          <p>{designation}</p>
          <p>{position}</p>
        </div>
      )}
    </div>
  );
}
