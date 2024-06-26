import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-y-hidden overflow-x-hidden">
      <div className="bg-light_bg w-[110vw] h-[30vh] rounded-[100%] absolute -top-[15vh] left-1/2 -translate-x-1/2 "></div>
      <video
        src="/demo.mp4"
        width={1920}
        height={1080}
        className="w-screen h-screen"
        autoPlay={true}
        controls={false}
        loop={true}
      ></video>
      {/* <Image
        src="/iit.webp"
        alt="ihub"
        width={1920}
        height={1080}
        className="w-full h-full"
      /> */}
    </div>
  );
}
