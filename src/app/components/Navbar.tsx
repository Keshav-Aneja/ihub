import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
interface Props {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}
export default function Navbar({ activeTab, setActiveTab }: Props) {
  const [openTeamNav, setOpenTeamNav] = useState(false);
  const [openServiceNav, setOpenServiceNav] = useState(false);

  return (
    <>
      {(openTeamNav || openServiceNav) && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-[20]"
          onMouseOver={() => {
            setOpenServiceNav(false);
            setOpenTeamNav(false);
          }}
        ></div>
      )}
      <nav className="--navbar w-[80%] flex justify-between items-center px-8 py-0 absolute top-4 left-1/2 -translate-x-1/2  rounded-xl  mx-auto z-[100] ">
        <Image
          alt="logo"
          src="/logo.webp"
          width={200}
          height={200}
          className="w-28"
        />
        <section className="h-full">
          <ul className="flex gap-6 items-center h-full font-medium">
            <li>
              <a
                href="/#focus"
                className="hover:text-primary transition-all duration-100 ease-linear"
                onClick={() => setActiveTab(0)}
              >
                Focus Area
              </a>
            </li>
            <li>
              <a
                href="/#focus"
                className="hover:text-primary transition-all duration-100 ease-linear"
                onClick={() => setActiveTab(1)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#mrlab"
                className="hover:text-primary transition-all duration-100 ease-linear"
              >
                MR Lab
              </a>
            </li>
            <li
              className="relative hover:text-primary transition-all cursor-pointer duration-100 ease-linear"
              onMouseEnter={() => setOpenTeamNav(true)}
            >
              People
              {openTeamNav && (
                <div
                  className={`w-fit bg-white rounded-lg p-2 absolute top-12 -right-8 text-xs text-center flex flex-col gap-2   shadow-lg text-black`}
                  onMouseOver={() => setOpenTeamNav(true)}
                >
                  <Link href="/coordinators">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Vertical Coordinators
                    </li>
                  </Link>
                  <a href="/#team">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Team
                    </li>
                  </a>
                </div>
              )}
            </li>
            <li>
              <a
                href="/#mrlab"
                className="hover:text-primary transition-all duration-100 ease-linear"
              >
                Outreach Activity
              </a>
            </li>
            <li
              className="relative hover:text-primary transition-all cursor-pointer duration-100 ease-linear"
              onMouseEnter={() => setOpenServiceNav(true)}
            >
              Services
              {openServiceNav && (
                <div
                  className={`w-fit bg-white rounded-lg p-2 absolute top-12 -right-8 text-xs text-center flex flex-col gap-2   shadow-lg text-black`}
                  onMouseOver={() => setOpenServiceNav(true)}
                >
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Projects Deliver Related to AR, VR and MR
                    </li>
                  </a>
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Consultancy Projects
                    </li>
                  </a>
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      3D Rendering Services
                    </li>
                  </a>
                </div>
              )}
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
}
