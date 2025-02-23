"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import useNavbar from "./useNavbar";
import hamburger from "@/app/assets/images/hamburger.svg";
import hamburgerAnimation from "@/app/assets/animations/hamburger-menu.json";
import Image from "next/image";
import { SVGS } from "./SVGS";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export const Navbar = () => {
  const { links, activeSection, open, setOpen, lottieRef } = useNavbar();

  return (
    <nav
      className={`${
        open ? "bg-primary-500 backdrop-blur-md" : ""
      } fixed right-0 top-0 z-50 flex h-fit w-full md:w-64 flex-col items-end gap-5 rounded-lg bg-opacity-15 p-2`}
    >
      <div className="m-2" onClick={() => setOpen(!open)}>
        <Lottie
          animationData={hamburgerAnimation}
          loop={false}
          lottieRef={lottieRef}
        />
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col justify-center gap-10 overflow-hidden p-4 text-right text-base uppercase text-gray-200 transition-all`}
      >
        {links.map((link, k) => (
          <Link
            key={k}
            href={link.href}
            className={
              activeSection == link.id ? "font-bold text-primary-600" : ""
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
