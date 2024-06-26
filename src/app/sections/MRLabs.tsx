import View3D from "@egjs/react-view3d";
import Image from "next/image";
import "@egjs/react-view3d/css/view3d-bundle.min.css";
import Marquee from "react-fast-marquee";
export default function MRLabs() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-screen relative parallax-container overflow-x-hidden">
        <Image
          src="/Hololens1.png"
          alt=""
          width={500}
          height={500}
          className="w-60 h-auto floater absolute top-[10%] right-24"
        />
        <Image
          src="/gpu.webp"
          alt=""
          width={500}
          height={500}
          className="w-60 h-auto floater absolute top-[15%] left-12"
        />
        <Image
          src="/scanner.jpg"
          alt=""
          width={500}
          height={500}
          className="w-60 h-auto floater absolute bottom-[10%] right-12"
        />
        <Image
          src="/oculus2.jpg"
          alt=""
          width={500}
          height={500}
          className="w-60 h-auto floater absolute bottom-[5%] left-1/2 -translate-x-1/2"
        />
        <Image
          src="/vive.webp"
          alt=""
          width={500}
          height={500}
          className="w-60 h-auto floater absolute bottom-[20%] left-48"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pop-in-out">
          <View3D
            tag="div"
            src="/meta_quest_3_low_poly_oculus_quest.glb"
            canvasClass="myclass"
            className="w-[100vw] h-[100vh] pointer-events-none "
            onReady={(e) => {
              console.log("Ready", e);
            }}
            zoom={{ doubleTap: false }}
            scrollable={false}
            rotate={{ scale: 5, duration: 2000 }}
            autoplay={true}
            wheelScrollable={false}
            // annotationURL={"/models/matridevice-annotations.json"}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.4)] backdrop-blur-[2px] p-4 rounded-xl">
          <h1
            className="text-[4rem] text-white text-center font-bold 2"
            style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
          >
            Mixed Reality Labs
          </h1>
          <p className="text-black text-center font-medium text-xl  w-fit  mx-auto">
            Infrastructure for XR Development
          </p>
        </div>
      </div>
    </div>
  );
}
