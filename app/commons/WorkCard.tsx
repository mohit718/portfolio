import React from "react";
import { Work } from "./Constants";
type Props = {
  work: Work;
};
export const WorkCard = ({ work }: Props) => {
  return (
    <div className="relative mb-4 text-gray-300">
      <div className="flex items-start">
        <div className="flex items-center">
          <div
            style={{ backgroundImage: "url(/arrow.svg)" }}
            className="h-fit w-auto bg-contain bg-center bg-no-repeat"
          >
            <h4 className="p-4 pl-2 text-sm font-bold">{work.year}</h4>
          </div>
          <div
            style={{ backgroundImage: "url(/circle.svg)" }}
            className="h-10 w-10 bg-contain bg-top bg-no-repeat"
          ></div>
        </div>
        <div className="mt-1">
          <h3 className="text-[clamp(20px,calc(1vw+1rem),30px)] font-medium text-gray-200">{work.title}</h3>
          <h4 className="text-[clamp(14px,calc(1vw+0.75rem),20px)] font-light tracking-[1.5px]">
            {work.subtitle}
          </h4>
          <p
            className="text-md description mt-2 leading-6 text-gray-400 hidden lg:block"
            dangerouslySetInnerHTML={{ __html: work.description || "" }}
          ></p>
        </div>
      </div>
    </div>
  );
};
