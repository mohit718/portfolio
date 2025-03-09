import profileImage from "@/app/assets/images/profile.png";
import techstack_f from "@/app/assets/images/tech_stack_frontend.png";
import techstack_b from "@/app/assets/images/tech_stack_backend.png";
import techstack_o from "@/app/assets/images/tech_stack_other.png";
import Image from "next/image";
import Link from "next/link";
import { SocialMediaBar } from "./commons/SocialMediaBar";
import { SVGS } from "./commons/SVGS";
import { ProjectCard } from "./commons/ProjectCard";
import { WorkCard } from "./commons/WorkCard";
import { works, projects, GITHUB_URL } from "./commons/Constants";

export default function Home() {
  return (
    <>
      {/* Side Bar */}
      <aside className="text left-0 flex min-h-screen w-full flex-col items-center justify-center gap-12 overflow-hidden p-2 text-center text-gray-400 md:gap-1 lg:fixed lg:w-1/3 lg:items-start lg:pl-6 lg:text-left xl:gap-8">
        <div className="flex flex-col gap-6 md:gap-2 xl:gap-8">
          <div>
            <h6 className="mb-1 text-xl">
              Hello <span className="text-primary-600">I&apos;m</span>
            </h6>
            <h1 className="animation-gradient bg-clip-text font-monoton text-[clamp(3rem,calc(3vw+1rem),4.25rem)] text-[transparent]">
              Mohit Soni
            </h1>
            <h3 className="mb-6 text-[clamp(1.625rem,calc(1vw+1rem),3rem)] tracking-[1.75px] text-gray-300">
              Full Stack Developer
            </h3>
          </div>
          <div className="flex justify-center gap-2 lg:justify-start">
            <Link
              href={"/cv.pdf"}
              download={"CV"}
              target={"_blank"}
              role="button"
              className="mb-8 rounded-full bg-primary-700 p-4 font-medium text-gray-300 transition-colors hover:bg-primary-600"
            >
              Download CV
            </Link>
            <Link
              href={"#work"}
              className="mb-8 rounded-full border border-primary-700 p-4 font-medium text-gray-300 transition-colors hover:bg-primary-600"
            >
              View My Work
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-2 xl:gap-8">
          <div>
            <h6 className="mb-2 text-lg font-semibold">FIND ME ON</h6>
            <div className="mb-4">
              <SocialMediaBar />
            </div>
          </div>
          <div>
            <h6 className="mb-2 text-lg font-semibold">OR REACH OUT</h6>
            <div className="group mb-2 flex items-center justify-center gap-4 text-center lg:justify-start lg:text-left">
              <div className="rounded-full shadow-primary-500 group-hover:shadow-[0_0_10px_1.5px]">
                {SVGS.email({ width: "40px", height: "40px" })}
              </div>
              <p className="text-lg font-medium tracking-[1px] group-hover:text-gray-200 xl:tracking-[5px]">
                mohit18.official@gmail.com
              </p>
            </div>
            <div className="group mb-2 flex items-center justify-center gap-4 lg:justify-start">
              <div className="rounded-full shadow-primary-500 group-hover:shadow-[0_0_10px_1.5px]">
                {SVGS.telephone({ width: "40px", height: "40px" })}
              </div>
              <p className="text-lg font-medium tracking-[1px] group-hover:text-gray-200 xl:tracking-[5px]">
                +91 977-3654-718
              </p>
            </div>
          </div>
        </div>
      </aside>
      <main className="absolute right-0 flex w-full flex-col items-end justify-center gap-y-8 py-3 lg:w-2/3">
        {/* My Image */}
        <header id="home" className="hidden overflow-hidden lg:block">
          <div className="overflow-hidden">
            <Image
              priority
              src={profileImage}
              className="max-w-[38rem]"
              alt={"Mohit Soni"}
            ></Image>
          </div>
        </header>
        {/* About Section */}
        <section
          id="about"
          className="flex w-full flex-col items-start gap-4 px-4 lg:px-16"
        >
          <h2 className="my-4 mb-6 text-4xl font-bold">About</h2>
          <p className="text-left font-poppins text-lg text-gray-400 tracking-[2px] leading-7 lg:leading-10 lg:tracking-[3px]">
            <span className="text-primary-500">3.5 years</span> of comprehensive
            work experience. Expertise in&nbsp;
            <span className="text-primary-500">
              React.js & Java Spring Boot framework
            </span>
            . Passionate about coding since the&nbsp;
            <span className="text-primary-500">age of 15</span>, I bring
            exceptional&nbsp;
            <span className="text-primary-500">problem-solving</span>
            &nbsp;skills and a strong&nbsp;
            <span className="text-primary-500">team-oriented</span>
            &nbsp;mindset, consistently&nbsp;
            <span className="text-primary-500">
              assisting colleagues in troubleshooting
            </span>
            &nbsp; and resolving complex technical issues.
          </p>
          <h3 className="mt-2 text-3xl font-bold">Tech Stack</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-1 items-stretch justify-center rounded-3xl bg-primary-500 bg-opacity-40 p-2 text-center backdrop-blur-md md:grid-cols-3">
            <span className="text-gray-300 font-lg  pb-2 border-b lg:border-b-0">
              Frontend
              <Image
                className="mt-2 mx-auto h-auto w-auto"
                src={techstack_f}
                alt={"Tech Stack"}
              />
            </span>
            <span className="text-gray-300 font-lg  pb-2 border-b lg:border-b-0">
              Backend
              <Image
                className="mt-2 mx-auto h-auto w-auto"
                src={techstack_b}
                alt={"Tech Stack"}
              />
            </span>
            <span className="text-gray-300 font-lg pb-2 ">
              Other Technologies
              <Image
                className="mt-2 mx-auto h-auto w-auto"
                src={techstack_o}
                alt={"Tech Stack"}
              />
            </span>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="px-4 lg:px-16">
          <h2 className="my-4 mb-6 text-left text-3xl lg:text-4xl font-bold">Experience</h2>
          {works.map((work, k) => (
            <WorkCard key={k} work={work} />
          ))}
        </section>
        {/* Project's Section */}
        <section id="work" className="w-full px-4 lg:px-16">
          <div className="flex items-center justify-between gap-1">
            <h2 className="my-4 mb-6 text-3xl lg:text-4xl font-bold ">Featured Projects</h2>
            <Link
              href={GITHUB_URL}
              target="_blank"
              className="lg:text-lg underline whitespace-nowrap"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project, k) => (
              <ProjectCard project={project} key={k} />
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="hidden w-full flex-col items-center justify-center px-4  lg:px-16"
        >
          <h1 className="animation-gradient bg-clip-text text-5xl font-bold text-[transparent]">
            Feel Free To Connect.
          </h1>
        </section>
      </main>
    </>
  );
}
