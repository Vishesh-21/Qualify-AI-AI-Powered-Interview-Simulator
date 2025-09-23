import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/components/ui/wobble-card";
import { IconMicrophone } from "@tabler/icons-react";
import React from "react";

const Banner = ({
  onGenerateInterview,
}: {
  onGenerateInterview: () => void;
}) => {
  return (
    <WobbleCard containerClassName="min-h-[200px]">
      <div>
        <h2 className="max-w-[26rem]  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[0.015em] text-white">
          Get Interview-Ready with <br /> AI-Powered practice and Feedback
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Practice on real interview questions and get instant Feedback.
        </p>
        <Button
          className="mt-4 relative cursor-pointer"
          onClick={onGenerateInterview}
          variant={"outline"}
        >
          Generate an Interview <IconMicrophone />
        </Button>
      </div>
    </WobbleCard>
  );
};

export default Banner;
