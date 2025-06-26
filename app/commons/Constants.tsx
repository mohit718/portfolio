import angular from "@/app/assets/images/logos/angular.png";
import bootstrap from "@/app/assets/images/logos/bootstrap.png";
import chakraui from "@/app/assets/images/logos/chakraui.png";
import mysql from "@/app/assets/images/logos/mysql.png";
import nodejs from "@/app/assets/images/logos/nodejs.png";
import postgresSm from "@/app/assets/images/logos/postgres-sm.png";
import react from "@/app/assets/images/logos/react.png";
import spring from "@/app/assets/images/logos/spring.png";
import tailwind from "@/app/assets/images/logos/tailwind.png";
import bsn from "@/app/assets/images/work/bsn.png";
import gamehub from "@/app/assets/images/work/gamehub.png";
import tic_tac_toe from "@/app/assets/images/work/tic-tac-toe.png";
import visualizer from "@/app/assets/images/work/visualizer.png";
import chess from "@/app/assets/images/work/chess.png";
import expense from "@/app/assets/images/work/expense.png";
import ref from "@/app/assets/images/ref1.png";
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
  description?: string[];
  year: string;
};

export const links = [
  { id: "home", href: "#home", label: "HOME" },
  { id: "about", href: "#about", label: "ABOUT" },
  { id: "experience", href: "#experience", label: "EXPERIENCE" },
  { id: "work", href: "#work", label: "work" },
];

export const media_links = {
  linkedin: {
    href: "https://www.linkedin.com/in/mohitsoni98/",
    label: "LinkedIn",
  },
  github: {
    href: "https://github.com/mohit718/",
    label: "GitHub",
  },
  twitter: {
    href: "https://x.com/",
    label: "Twitter",
  },
  youtube: {
    href: "https://www.youtube.com/@mohit-1-8",
    label: "Youtube",
  },
  instagram: {
    href: "https://www.instagram.com/mohit.soni6922/",
    label: "Instagram",
  },
};

export const GITHUB_URL = "https://github.com/mohit718/";

/* eslint-disable @typescript-eslint/no-unused-vars */
const _projects_ref: Project[] = [
  {
    title: "Book Social Network",
    description:
      "Lets you rent books to your peers and add your own books for renting.",
    image: ref,
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
    title: "Tic-Tac-Toe",
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

export const projects: Project[] = [
  {
    title: "Book Social Network",
    description:
      "Lets you rent books to your peers and add your own books for renting.",
    image: bsn,
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
    title: "Multiplayer Chess",
    description:
      "Multiplayer chess game, lets you connect with your friend online and play.",
    image: chess,
    technologies: [
      { label: "React", image: react },
      { label: "Tailwind", image: tailwind },
      { label: "NodeJs", image: nodejs },
    ],
    links: {
      live: "https://github.com/mohit718/chess",
      github: "https://github.com/mohit718/chess",
    },
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Visualize sorting algorithms to better understand its working.",
    image: visualizer,
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
    description:
      "Application designed to help you manage your finances efficiently.",
    image: expense,
    technologies: [
      { label: "React", image: react },
      { label: "Tailwind", image: tailwind },
    ],
    links: {
      live: "https://github.com/mohit718/expense-tracker",
      github: "https://github.com/mohit718/expense-tracker",
    },
  },
  {
    title: "Game Hub",
    description: "Lets you download raw games for different platforms.",
    image: gamehub,
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
    image: tic_tac_toe,
    technologies: [
      { label: "React", image: react },
      { label: "Tailwind", image: tailwind },
    ],
    links: {
      live: "https://tictactoe-ms18.vercel.app/",
      github: "https://github.com/mohit718/tic-tac-toe",
    },
  },
];
export const works: Work[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Rovae, Remote",
    description: [
      "Created a HR system for schools using Next.js (frontend) and  Supabase (API & Database). Designed modules for attendance, payroll, and admin dashboard. Implemented role-based access control (RBAC) to prevent Access Control vulnerabilites. Reduced manual workload by 30% through automated reporting.",
      "Built an Inventory Management System with Next.js. Integrated barcode scanning and automated reorder alerts, cutting supply discrepancies by 40%. Deployed analytics dashboards for procurement teams. Delivered the project on time, showcasing efficient Agile execution and attention to detail.",
    ],
    year: "2023",
  },
  {
    title: "Specialist Programmer",
    subtitle: "Infosys Limited, Pune",
    description: [
      "Designed and developed a comprehensive policy management solution for the client from scratch.",
      "Integrated a payment gateway to facilitate paperless transactions, and enable seamless updates to policies, vehicles, and more directly through the portal.",
      "Gained expertise in clean code architecture, implemented complex business features using Angular, and ensured robust functionality by creating unit tests for all features, with over 80% code coverage.",
    ],
    year: "2021",
  },
];
