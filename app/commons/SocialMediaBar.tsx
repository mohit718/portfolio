import Link from "next/link";
import { media_links } from "./Constants";
import { SVGS } from "./SVGS";

export const SocialMediaBar = () => {
  return (
    <div className="flex justify-center gap-2 lg:justify-start xl:gap-5">
      <Link
        href={media_links.github.href}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.github({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={media_links.linkedin.href}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.linkedin({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={media_links.twitter.href}
        className="hidden rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.twitter({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={media_links.youtube.href}
        className="hidden rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.youtube({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
      <Link
        href={media_links.instagram.href}
        className="rounded-full shadow-primary-500 hover:shadow-[0_0_10px_1.5px]"
      >
        {SVGS.instagram({ className: "w-[50px] xl:w-[60px]" })}
      </Link>
    </div>
  );
};
