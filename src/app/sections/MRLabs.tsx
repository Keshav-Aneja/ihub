import View3D from "@egjs/react-view3d";
import Image from "next/image";
import "@egjs/react-view3d/css/view3d-bundle.min.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
export default function MRLabs() {
  return (
    <div className="w-full h-[80vh] md:h-screen overflow-hidden" id="mrlab">
      <div className="w-full h-[80vh] md:h-screen relative parallax-container overflow-x-hidden">
        <Image
          src="/Hololens1.png"
          alt=""
          width={500}
          height={500}
          className="w-28 md:w-40 lg:w-60 h-auto floater absolute top-[10%] right-8 md:right-16 lg:right-24"
        />
        <Image
          src="/gpu.webp"
          alt=""
          width={500}
          height={500}
          className="w-28 md:w-40 lg:w-60 h-auto floater absolute top-[15%] left-4 md:left-10 lg:left-12"
        />
        <Image
          src="/scanner.jpg"
          alt=""
          width={500}
          height={500}
          className="hidden md:block w-28 md:w-40 lg:w-60 h-auto floater absolute bottom-[10%] right-12"
        />
        <Image
          src="/oculus2.jpg"
          alt=""
          width={500}
          height={500}
          className="w-40 md:w-40 lg:w-60 h-auto floater absolute bottom-[5%] left-1/2 -translate-x-1/2"
        />
        <Image
          src="/vive.webp"
          alt=""
          width={500}
          height={500}
          className="w-32 md:w-40 lg:w-60 h-auto floater absolute bottom-[20%] left-8 md:left-20 lg:left-48"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pop-in-out">
          <View3D
            tag="div"
            src="/meta3.glb"
            canvasClass="myclass"
            className="w-[100vw] h-[100vh] pointer-events-none scale-75 md:scale-100"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.4)] backdrop-blur-[2px] p-4 rounded-xl w-full md:w-fit">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-[4rem] text-white text-center font-bold 2"
            style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0.7, translateY: -50, scale: 0.5 }}
            whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mixed Reality Labs
          </motion.h1>
          <p className="text-black text-center font-medium text-sm md:text-lg lg:text-xl  w-fit  mx-auto">
            Infrastructure for XR Development
          </p>
        </div>
      </div>
    </div>
  );
}
