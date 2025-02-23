import angular from "@/app/assets/images/logos/angular.png";
import bootstrap from "@/app/assets/images/logos/bootstrap.png";
import chakraui from "@/app/assets/images/logos/chakraui.png";
import mysql from "@/app/assets/images/logos/mysql.png";
import nodejs from "@/app/assets/images/logos/nodejs.png";
import postgresSm from "@/app/assets/images/logos/postgres-sm.png";
import react from "@/app/assets/images/logos/react.png";
import spring from "@/app/assets/images/logos/spring.png";
import tailwind from "@/app/assets/images/logos/tailwind.png";
import ref2 from "@/app/assets/images/ref2.png";
import { StaticImageData } from "next/image";



export type Project = {
  title: string;
  description?: string;
  image?: StaticImageData;
  technologies: { label: string; image: StaticImageData }[];
  links: {
    live?: string;
    github: string;
  };
};

export type Work = {
  title: string;
  subtitle: string;
  description?: string;
  year: string;
};

export const links = [
  { id: "home", href: "#home", label: "HOME" },
  { id: "about", href: "#about", label: "ABOUT" },
  { id: "experience", href: "#experience", label: "EXPERIENCE" },
  { id: "work", href: "#work", label: "work" }
];


export const projects: Project[] = [
  {
    title: "Book Social Network",
    description:
      "Lets you rent books to your peers and add your own books for renting.",
    image: ref2,
    technologies: [
      { label: "Spring Boot", image: spring },
      { label: "Angular", image: angular },
      { label: "Bootstrap", image: bootstrap },
      { label: "Postgres", image: postgresSm },
    ],
    links: {
      live: "https://github.com/mohit718/book-social-network",
      github: "https://github.com/mohit718/book-social-network",
    },
  },
  {
    title: "E-Commerce Site",
    description: "Fully functional E-Commerce store developed in react.",
    technologies: [
      { label: "Node Js", image: nodejs },
      { label: "React", image: react },
      { label: "Bootstrap", image: bootstrap },
      { label: "My SQL", image: mysql },
    ],
    links: {
      live: "https://github.com/mohit718/Ecomm",
      github: "https://github.com/mohit718/Ecomm",
    },
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Visualize sorting algorithms to better understand its working.",
    technologies: [
      { label: "React", image: react },
      { label: "Bootstrap", image: bootstrap },
    ],
    links: {
      live: "https://ms18-sorting.netlify.app/",
      github: "https://github.com/mohit718/Visualizer",
    },
  },
  {
    title: "Expense Tracker",
    description: "Track your daily expenses using Expense Tracker.",
    technologies: [
      { label: "React", image: react },
      { label: "Bootstrap", image: bootstrap },
    ],
    links: {
      live: "https://github.com/mohit718/expense-tracker/",
      github: "https://github.com/mohit718/expense-tracker/",
    },
  },
  {
    title: "Game Hub",
    description: "Lets you download raw games for different platforms.",
    technologies: [
      { label: "React", image: react },
      { label: "Chakra Ui", image: chakraui },
    ],
    links: {
      live: "https://gamehub-ms18.vercel.app/",
      github: "https://github.com/mohit718/game-hub",
    },
  },
  {
    title: "Tik-Tac-Toe",
    description: "Classic Tic-Tac-Toe game for boring days.",
    technologies: [
      { label: "React", image: react },
      { label: "Tailwind", image: tailwind },
    ],
    links: {
      live: "https://github.com/mohit718/tic-tac-toe",
      github: "https://github.com/mohit718/tic-tac-toe",
    },
  },
];
export const works: Work[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Freelancing, Remote",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    year: "2023",
  },
  {
    title: "Operations Manager",
    subtitle: "The Sparkles Play School, Faridabad",
    description:
      "<ul><li>Produced SOPs to document workplace procedures and optimize productivity through standardization.</li><li>Delegated work to staff, setting priorities and goals, also provided guidance and training to the staff for better management.</li><li>Improved morale and management communication by creating employee recognition and rewards practices.</li></ul>",
    year: "2023",
  },
  {
    title: "Specialist Programmer",
    subtitle: "Infosys Limited, Pune",
    description:
      "<ul><li>Designed and developed a comprehensive policy management solution for an insurance company from the ground up. </li><li>Integrated a payment gateway to facilitate paperless transactions, and enable seamless updates to policies, vehicles, and more directly through the portal. </li><li>Gained expertise in clean code architecture, implemented complex business features using Angular, and ensured robust functionality by creating unit tests for all features, with over 80% code coverage.</li></ul>",
    year: "2021",
  },
];
