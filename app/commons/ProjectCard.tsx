"use client";
import sampleImage from "@/app/assets/images/ref1.png";
import Image from "next/image";
import { useState } from "react";
import { Project } from "./Constants";

type Props = {
  project: Project;
};
export const ProjectCard = ({ project }: Props) => {
  const [active, setActive] = useState<0 | 1>(0);
  return (
    <div
      className="h-[30rem] text-center bg-primary-500 bg-opacity-15 rounded-2xl overflow-hidden relative"
      onMouseEnter={() => setActive(1)}
      onMouseLeave={() => setActive(0)}
    >
      <div className="absolute right-0 top-1/2 z-30  transition-all">
        <div
          className={`${
            active == 0 && "bg-gray-200"
          } border-gray-200 border w-3 h-3 rounded-full mr-1 mb-1 duration-300`}
        ></div>
        <div
          className={`${
            active == 1 && "bg-gray-200"
          } border-gray-200 border w-3 h-3 rounded-full mr-1 mt-1 duration-300`}
        ></div>
      </div>
      <div className="w-full h-[6rem] p-2 bg-primary-500 bg-opacity-15 backdrop-blur-2xl overflow-hidden absolute top-0 z-40">
        <h3 className="font-bold text-2xl tracking-[1px] mb-1">
          {project.title}
        </h3>
        <h6 className="text-gray-400 text-sm">{project.description}</h6>
      </div>
      <div className="hover:translate-y-[-55%]  transition-transform duration-500 h-[44rem] overflow-hidden absolute top-[6rem] z-30 ">
        <div className={`h-[24rem] overflow-hidden z-20`}>
          <Image
            src={project.image || sampleImage}
            alt={project.title}
            className="object-cover object-top h-full"
          />
        </div>
        <div className={`h-[24rem] overflow-hidden p-4 z-20`}>
          <h4 className="text-lg mb-4 font-semibold text-gray-400">
            Technologies Used
          </h4>
          <ul>
            {project.technologies.map((tech, k) => (
              <li
                key={k}
                className="grid grid-cols-2 items-center justify-center text-left"
              >
                <Image
                  src={tech.image}
                  alt={tech.label}
                  className="h-12 w-auto object-contain"
                />
                <h5 className="text-lg font-bold text-gray-200">
                  {tech.label}
                </h5>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
