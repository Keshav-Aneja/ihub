import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-content w-full flex flex-col">
      <div className="w-[90%] h-[1px] bg-[#7A7A7A] my-6 mx-auto hidden md:block"></div>
      <section className="w-full h-full p-4 md:p-10 flex  justify-center gap-8 md:gap-20 items-start md:items-start">
        <Image
          src="/logo.webp"
          alt="ihub"
          width={600}
          height={600}
          className="w-16 md:w-52 h-auto"
        />
        <section className="flex flex-col gap-4 text-black">
          <span className="flex items-center gap-2 text-sm md:text-base">
            <Image
              src="/email.svg"
              alt="ihub"
              width={50}
              height={50}
              className="w-3 md:w-4 invert"
            />
            ihub@email.com
          </span>
          <button className="px-6 py-2 rounded-md bg-primary text-white text-sm font-normal w-fit">
            Get in touch
          </button>
          <div className="--socials flex gap-4  ">
            <Link
              href="https://www.facebook.com/profile.php?id=100095488214890&mibextid=ZbWKwL"
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
              href="https://www.instagram.com/aurax.world"
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
              href="https://www.linkedin.com/company/auraxtech/"
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
              href="https://x.com/aurax_world"
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
              href="https://www.youtube.com/@AuraX_world"
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
        <section className="flex flex-col gap-2 text-xs">
          <h1 className="text-xl">Area of work</h1>
          <p>Technology</p>
          <p>Application Area</p>
        </section>
        <section className="flex flex-col gap-2 text-xs">
          <h1 className="text-xl">Projects</h1>
          <p>Culture & Heritage</p>
          <p>Edtech</p>
          <p>Multi-sensory immersion Technologies</p>
          <p>Healthcare & Medical Education</p>
        </section>
      </section>

      <div className="--line w-full h-[6px] md:h-[12px] bg-primary"></div>
    </div>
  );
};

export default Footer;

const companies = [
  "Squarespace",
  "Joomla",
  "Drupal",
  "BigCommerce",
  "Duda",
  "GoDaddy Website Builder",
  "Strikingly",
  "Jimdo",
  "Zoho Sites",
  "Yola",
  "Site123",
  "Webnode",
  "Simvoly",
  "uCraft",
  "Tilda",
  "Mozello",
  "Moonfruit",
  "uKit",
  "PageCloud",
  "Carrd",
  "Webs",
  "SiteW",
  "Brizy",
  "Elementor (WordPress plugin)",
  "Gatsby",
  "HubSpot CMS",
  "TYPO3",
  "OctoberCMS",
  "Grav",
  "Concrete5",
  "CMS Made Simple",
  "SilverStripe",
  "Contentful",
  "ButterCMS",
  "Sanity",
  "Prismic",
  "Statamic",
  "Forestry",
  "Netlify CMS",
  "Storyblok",
  "DatoCMS",
  "Directus",
  "Cockpit CMS",
  "Unbounce",
];
