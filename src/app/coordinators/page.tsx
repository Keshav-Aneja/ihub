"use client";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Image from "next/image";
export default function Coordinator() {
  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <Navbar />
      <div className="w-full min-h-[70vh] mt-32">
        <Heading heading="Vertial Coordinators" />
        <section className="flex flex-col gap-20 mt-12">
          <div className="flex gap-20 w-[70%] mx-auto">
            <div className="w-48 aspect-[333/390] rounded-xl overflow-hidden">
              <Image
                src="/core3.webp"
                width={400}
                height={300}
                alt="core"
                className="w-full h-full"
              />
            </div>
            <div className="relative w-[100%] h-full">
              <h1 className="text-2xl font-medium text-primary">
                Dr. Amit Bhardwaj
              </h1>
              <div className="w-full h-[30%] bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
              <p className="mt-6 h-32 overflow-hidden">
                I work in the field of haptics- a study of sense of touch.
                Unlike our other senses like vision and hearing, smell and
                taste, the sense of touch (i.e., haptics) remained unexplored
                for a long time. Since last three decades, it has emerged as an
                active area of research for the scientific community. In the
                haptics literature, broadly, there is a mention of three types
                of haptics - human haptics, machine haptics and computer
                haptics. When a user touches an object, the interaction
                information is conveyed to the brain through the sensory system.
                The brain computes the necessary force which is given back to
                activate the muscles for the hand or arm movements. Human
                haptics deals with the study of this human sensorimotor loop and
                issues related to human perception of the sense of touch.
                Machine haptics deals with the study of design and construction
                of electro-mechanical devices which can effectively replace or
                augment human touch.
              </p>
              <a href="http://home.iitj.ac.in/~amitb/" target="_blank">
                <button className="bg-white px-6 py-2 shadow-lg border-[1px] border-[#aeaeae] rounded-full  -bottom-4 left-1/2 -translate-x-1/2 text-whit absolute w-fit text-primary">
                  See More
                </button>
              </a>
            </div>
          </div>
          <div className="flex gap-20 w-[70%] mx-auto">
            <div className="w-48 aspect-[333/390] rounded-xl overflow-hidden">
              <Image
                src="/core1.webp"
                width={400}
                height={300}
                alt="core"
                className="w-full h-full"
              />
            </div>
            <div className="relative w-[100%] h-full">
              <h1 className="text-2xl font-medium text-primary">
                Dr. Rajendra Nagar
              </h1>
              <div className="w-full h-[30%] bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
              <p className="mt-6 overflow-hidden h-32">
                I was an Assistant Research Professor in Electrical Engineering
                at the Indian Institute of Technology Gandhinagar from 24 Dec.
                2018 to 19 July 2019.I completed my Ph.D. in Electrical
                Engineering under the supervision of Dr. Shanmuganathan Raman at
                the Indian Institute of Technology Gandhinagar on 20th May,
                2019. I was a System Engineer at TCS Innovation Lab, Gurgaon
                from July 2013 to May 2014. I completed my B.Tech. in Electrical
                Engineering at the Indian Institute of Technology Jodhpur (2013)
              </p>
              <a href="http://home.iitj.ac.in/~rn/" target="_blank">
                <button className="bg-white shadow-lg px-6 py-2 rounded-full  -bottom-4 left-1/2 -translate-x-1/2 text-whit absolute w-fit text-primary border-[1px] border-[#aeaeae]">
                  See More
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
