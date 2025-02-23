"use client";
// import Lottie from "lottie-react";
import Link from "next/link";
import useNavbar from "./useNavbar";
import { SVGS } from "./SVGS";

export const Navbar = () => {
  const { links, activeSection, open, setOpen } = useNavbar();

  return (
    <nav
      className={`${
        open ? "bg-primary-500 backdrop-blur-md" : ""
      } fixed right-0 top-0 z-50 flex h-fit w-full flex-col items-end gap-5 rounded-lg bg-opacity-15 p-2 md:w-64`}
    >
      <div onClick={() => setOpen(!open)}>
        {/* <Lottie
          animationData={hamburgerAnimation}
          loop={false}
          lottieRef={lottieRef}
        /> */}
        <div>{SVGS.hamburger({className:'w-14 ',fill:'#fff'})}</div>
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
