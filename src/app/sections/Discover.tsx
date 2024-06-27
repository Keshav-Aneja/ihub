import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Heading from "../components/Heading";
import { projects } from "../data/project";
import { work } from "../data/work";
import ProjectCard from "../components/ProjectCard";
import ProjectCardBlock from "../components/ProjectCardBlock";
interface Props {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}
export default function Discover({ activeTab, setActiveTab }: Props) {
  // const [activeTab, setActiveTab] = useState(0);
  const [projectTab, setProjectTab] = useState(0);
  useEffect(() => {
    if (activeTab === 0 || activeTab === 1) {
      setProjectTab(0);
    }
  }, [activeTab]);
  return (
    <div
      className="w-full min-h-screen bg-light_bg flex flex-col gap-8"
      id="focus"
    >
      <Heading heading="Discover" />
      <div className="w-[20%] mx-auto p-2  rounded-full shadow-xl border-[1px] border-[#aeaeae40] text-sm">
        <button
          className={`w-[50%]  h-12 px-4 py-1 font-medium rounded-full ${
            activeTab === 0 && "bg-dark_bg text-white"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Area of work
        </button>
        <button
          className={`w-[50%] h-12 px-4 py-1 font-medium rounded-full ${
            activeTab === 1 && "bg-dark_bg text-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Projects
        </button>
      </div>
      <section className="w-[80%] flex items-start justify-between mx-auto">
        {activeTab === 0 && (
          <div className="--menu w-[35%] h-full  border-primary ">
            {activeTab === 0 ? (
              <ul className="flex flex-col gap-12">
                <li
                  onClick={() => setProjectTab(0)}
                  className={`${
                    projectTab === 0 ? "text-black " : "text-black/50"
                  } cursor-pointer`}
                >
                  Technology
                </li>
                <li
                  onClick={() => setProjectTab(1)}
                  className={`${
                    projectTab === 1 ? "text-black " : "text-black/50"
                  } cursor-pointer`}
                >
                  Application Area
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col gap-12">
                <li
                  onClick={() => setProjectTab(0)}
                  className={`${
                    projectTab === 0 ? "text-black " : "text-black/50"
                  } cursor-pointer`}
                >
                  Culture & Heritage
                </li>
                <li
                  onClick={() => setProjectTab(1)}
                  className={`${
                    projectTab === 1 ? "text-black " : "text-black/50"
                  } cursor-pointer`}
                >
                  EdTech
                </li>
                <li
                  onClick={() => setProjectTab(2)}
                  className={`${
                    projectTab === 2 ? "text-black " : "text-black/50"
                  } cursor-pointer`}
                >
                  Multi-sensory Immersion Technologies
                </li>
                <li
                  onClick={() => setProjectTab(3)}
                  className={`${
                    projectTab === 3 ? "text-black " : "text-black/50"
                  } cursor-pointer`}
                >
                  Healthcare & Medical Education
                </li>
              </ul>
            )}
          </div>
        )}
        {activeTab === 0 && (
          <div
            className={`--menu ${
              activeTab === 0 ? "w-[65%]" : "w-[100%]"
            } h-full grid border-l-[1px] border-primary ${
              projectTab === 0 ? "grid-cols-2" : "grid-cols-3"
            } gap-12 px-12 `}
          >
            {work.map(
              (project, index) =>
                project.id === projectTab && (
                  <ProjectCard
                    name={project.name}
                    key={index}
                    img={project.img}
                  />
                )
            )}
          </div>
        )}
        {activeTab === 1 && (
          <div className="--menu w-[100%]  grid grid-cols-4 gap-2 mt-8 ">
            {projects.map((project, index) => (
              <ProjectCardBlock
                category={project.category}
                key={index}
                img={project.img}
                details={project.details}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
