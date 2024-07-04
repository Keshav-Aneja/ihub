import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-content w-[90%] mx-auto md:w-full flex flex-col">
      <div className="w-[90%] h-[1px] bg-[#7A7A7A] my-6 mx-auto hidden md:block"></div>
      <section className="w-full h-full p-4 md:p-10 flex flex-col  md:flex-row  justify-center gap-8 md:gap-20 md:items-start ">
        <Image
          src="/logo.webp"
          alt="ihub"
          width={600}
          height={600}
          className="w-28 md:w-52 h-auto"
        />
        <section className="flex flex-col gap-4 text-black">
          <a
            href="mailto:arvrinfo@ihub-drishit.ai"
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <Image
              src="/email.svg"
              alt="ihub"
              width={50}
              height={50}
              className="w-3 md:w-4 invert"
            />
            arvrinfo@ihub-drishit.ai
          </a>
          <a
            href="tel:02912802248"
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <Image
              src="/phone.png"
              alt="ihub"
              width={50}
              height={50}
              className="w-3 md:w-4"
            />
            0291-2802248
          </a>

          <div className="--socials flex gap-4 mt-4">
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="h-full invert group-hover:invert-0"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/x.svg"
                alt="x"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/youtube.svg"
                alt="youtube"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
          </div>
        </section>
        <div className="flex  justify-between gap-12 md:gap-20">
          <section className="w-[50%] md:w-fit flex flex-col gap-2 text-xs">
            <h1 className="text-lg md:text-xl font-medium text-primary">
              Area of work
            </h1>
            <p>Technology</p>
            <p>Application Area</p>
          </section>
          <section className="w-[50%] md:w-fit flex flex-col gap-2 text-xs">
            <h1 className="text-lg md:text-xl font-medium text-primary">
              Projects
            </h1>
            <p>Culture & Heritage</p>
            <p>Edtech</p>
            <p>Multi-sensory immersion Technologies</p>
            <p>Healthcare & Medical Education</p>
          </section>
        </div>
      </section>

      <div className="--line w-full h-[6px] md:h-[12px] bg-primary"></div>
    </div>
  );
};

export default Footer;
