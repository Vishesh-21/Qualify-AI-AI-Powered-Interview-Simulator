import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import React from "react";

const PurposeSection = () => {
  return (
    <div className="relative flex min-h-screen mt-24 w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-40 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Empowering You to Crack Every Interview
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          Qualify AI helps job seekers prepare with AI-powered mock interviews,
          instant feedback, and personalized practice—boosting confidence and
          improving performance to land your dream job.
        </p>
      </div>
    </div>
  );
};

export default PurposeSection;
