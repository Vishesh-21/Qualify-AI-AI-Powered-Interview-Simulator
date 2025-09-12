"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function MovingCards() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Qualify AI gave me the confidence I needed. The AI-driven mock interviews felt so real, and the instant feedback helped me refine my answers. I landed my first job within a month!",
    name: "Rohit Sharma",
    title: "Software Engineer at TechNova",
  },
  {
    quote:
      "The personalized question sets were exactly what I needed. Practicing with Qualify AI made me feel fully prepared for my data analyst interview.",
    name: "Sneha Patel",
    title: "Data Analyst at InsightPro",
  },
  {
    quote:
      "I loved how easy it was to practice on the go. The voice-based interviews helped me improve my communication and confidence drastically.",
    name: "Arjun Mehta",
    title: "Marketing Associate at BrightEdge",
  },
  {
    quote:
      "The progress tracking feature was a game-changer. I could see myself improving after every session, and that kept me motivated until I cracked my interview.",
    name: "Priya Nair",
    title: "Business Analyst at StratVision",
  },
  {
    quote:
      "Qualify AI feels like a personal mentor. It not only helped me with technical questions but also improved my overall interview strategy.",
    name: "Karan Verma",
    title: "Product Manager at Innovex",
  },
];
