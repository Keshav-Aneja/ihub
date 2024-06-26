import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [openTeamNav, setOpenTeamNav] = useState(false);
  return (
    <nav className="--navbar w-[80%] flex justify-between items-center px-8 p-4 absolute top-4 left-1/2 -translate-x-1/2  rounded-xl  mx-auto z-[100] ">
      <Image
        alt="logo"
        src="/logo.webp"
        width={200}
        height={200}
        className="w-20"
      />
      <section className="h-full">
        <ul className="flex gap-6 items-center h-full font-medium">
          <li>
            <a
              href=""
              className="hover:text-primary transition-all duration-100 ease-linear"
            >
              Area of work
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-primary transition-all duration-100 ease-linear"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-primary transition-all duration-100 ease-linear"
            >
              Activities
            </a>
          </li>
          <li
            className="relative hover:text-primary transition-all cursor-pointer duration-100 ease-linear"
            onClick={() => setOpenTeamNav(!openTeamNav)}
          >
            Team
            {openTeamNav && (
              <div
                className={`w-fit bg-white rounded-lg p-2 absolute top-12 -right-8 text-xs text-center flex flex-col gap-2   shadow-lg text-black`}
              >
                <Link href="/coordinators">
                  <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                    Vertical Coordinators
                  </li>
                </Link>
                <a href="#team">
                  <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                    Team
                  </li>
                </a>
              </div>
            )}
          </li>
        </ul>
      </section>
    </nav>
  );
}
