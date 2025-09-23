"use client";
import React from "react";
import Banner from "./_components/Banner";
import { useRouter } from "next/navigation";

const InterviewDashBoardPage = () => {
  const router = useRouter();

  const handleGenerateInterview = () => {
    router.push("/interview/generate");
  };

  return (
    <div className="md:px-10 px-3 my-8">
      <Banner onGenerateInterview={handleGenerateInterview} />
    </div>
  );
};

export default InterviewDashBoardPage;
