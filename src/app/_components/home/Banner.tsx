import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight-new";
import { IconArrowRightRhombus } from "@tabler/icons-react";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-screen flex items-center mt-24 flex-col">
      <Spotlight />
      <h3 className="text-2xl font-medium"> Crack Your Next Interview with</h3>
      <h1 className="text-[6rem] font-bold gradient-title leading-25 uppercase tracking-wide">
        Qualify AI
      </h1>
      <p className="text-sm w-1/2 text-center">
        Practice with an AI Voice Interviewer that simulates real interview
        scenarios — sharpen your skills, get instant feedback, and boost your
        confidence.
      </p>
      <div className="mt-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            Get Started <IconArrowRightRhombus />
          </span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Banner;
