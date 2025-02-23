import React from "react";
import { SVGS } from "./SVGS";
import Link from "next/link";

export const SocialMediaBar = () => {
  return (
    <div className="flex gap-2 xl:gap-5 justify-center lg:justify-start">
      <Link
        href={"#"}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.linkedin({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={"#"}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.github({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={"#"}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.twitter({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={"#"}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.youtube({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={"#"}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.instagram({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
    </div>
  );
};
