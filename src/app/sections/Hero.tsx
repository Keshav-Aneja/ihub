import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-y-hidden overflow-x-hidden">
      <div className="bg-light_bg w-[110vw] h-[30vh] rounded-[100%] absolute -bottom-[15vh] left-1/2 -translate-x-1/2 "></div>
      <Image
        src="/iit.webp"
        alt="ihub"
        width={1920}
        height={1080}
        className="w-full h-full"
      />
    </div>
  );
}
