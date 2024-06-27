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
              <p className="mt-3 h-32 overflow-hidden">
                Associate Professor,
                <br />
                Department of Electrical Engineering,
                <br />
                IIT Jodhpur, Rajasthan, India - 342037
              </p>
              <a href="http://home.iitj.ac.in/~amitb/" target="_blank">
                <button className="bg-white px-6 py-2 shadow-lg border-[1px] border-[#aeaeae] rounded-full  -bottom-4  absolute w-fit text-primary">
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
              <p className="mt-3 h-32 overflow-hidden">
                Assistant Professor,
                <br />
                307, Department of Electrical Engineering
                <br />
                Indian Institute of Technology Jodhpur
              </p>
              <a href="http://home.iitj.ac.in/~rn/" target="_blank">
                <button className="bg-white shadow-lg px-6 py-2 rounded-full  -bottom-4  absolute w-fit text-primary border-[1px] border-[#aeaeae]">
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
