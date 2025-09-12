"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import React from "react";

export function Services() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 h-full bg-pink-800 max-h-[400px] lg:min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            AI-Powered Mock Interviews
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Experience realistic, voice-based mock interviews with our
            intelligent AI interviewer. Practice anytime, anywhere, and get
            comfortable before the real deal.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 md:col-span-2 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Instant Performance Feedback
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Receive detailed insights on your answers, communication style,
          confidence, and technical accuracy—helping you improve with every
          session.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 md:col-span-2 min-h-[300px] bg-yellow-800">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Multi-Domain Support
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Get customized practice sessions designed for your target role—whether
          it’s software developer, data analyst, marketer, or manager. Qualify
          AI adapts to your career goals for maximum impact.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 max-h-[400px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Real-Time Progress Tracking
          </h2>
          <p className="mt-4 max-w-[40rem] text-left  text-base/6 text-neutral-200">
            Track your growth with performance analytics and identify your
            strengths and areas for improvement over time. <br />
            Access expert tips, curated resources, and strategies to boost your
            confidence and crack your dream interview.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
