"use client";
import sampleImage from "@/app/assets/images/ref1.png";
import Image from "next/image";
import { useState } from "react";
import { Project } from "./Constants";
import Link from "next/link";
import { SVGS } from "./SVGS";

type Props = {
  project: Project;
};
export const ProjectCard = ({ project }: Props) => {
  const [active, setActive] = useState<0 | 1>(0);
  return (
    <div
      className="relative h-[30rem] overflow-hidden rounded-2xl bg-primary-500 bg-opacity-15 text-center"
      onMouseEnter={() => setActive(1)}
      onMouseLeave={() => setActive(0)}
    >
      <div className="absolute top-0 z-40 h-[6rem] w-full overflow-hidden bg-primary-800/60 p-2 backdrop-blur-2xl">
        <h3 className="mb-1 text-2xl font-bold tracking-[1px]">
          {project.title}
        </h3>
        <h6 className="text-sm text-gray-400">{project.description}</h6>
      </div>
      <div className="absolute top-[6rem] z-30 h-[44rem] overflow-hidden text-left transition-transform duration-500 hover:translate-y-[-55%]">
        <div className={`z-20 h-[24rem] overflow-hidden`}>
          <Image
            src={project.image || sampleImage}
            alt={project.title}
            className="h-full object-cover object-left-top"
          />
        </div>
        <div className={`z-20 h-[24rem] overflow-hidden p-4`}>
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-semibold text-gray-400">
              Technologies Used
            </h4>
            <ul className="flex flex-col gap-3">
              {project.technologies.map((tech, k) => (
                <li key={k} className="flex items-center gap-4">
                  <Image
                    src={tech.image}
                    alt={tech.label}
                    className="h-auto w-10 object-contain"
                  />
                  <h5 className="font-semibold text-gray-200">{tech.label}</h5>
                </li>
              ))}
            </ul>
            <div className="my-4 flex items-stretch justify-stretch gap-2 text-sm font-semibold">
              {project.links.live && (
                <Link
                  href={project.links.live}
                  className="w-full whitespace-nowrap rounded-lg bg-gray-400/30 p-1 px-3 text-gray-300 hover:text-gray-100"
                >
                  {SVGS.link({ className: "w-6 h-6 inline mx-1" })}
                  {"Live Link"}
                </Link>
              )}
              {project.links.github && (
                <Link
                  href={project.links.github}
                  className="w-full whitespace-nowrap rounded-lg bg-gray-400/30 p-1 px-2 text-gray-300 hover:text-gray-100"
                >
                  {SVGS.github({ className: "w-6 h-6 inline mx-1" })}
                  {"Source Code"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 z-30 transition-all">
        <div
          className={`${
            active == 0 && "bg-gray-200"
          } mb-1 mr-1 h-3 w-3 rounded-full border border-gray-200 duration-300`}
        ></div>
        <div
          className={`${
            active == 1 && "bg-gray-200"
          } mr-1 mt-1 h-3 w-3 rounded-full border border-gray-200 duration-300`}
        ></div>
      </div>
    </div>
  );
};
