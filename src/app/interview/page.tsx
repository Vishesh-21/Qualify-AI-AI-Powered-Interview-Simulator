import React from "react";
import Banner from "./_components/Banner";
import AllInterviewPage from "./_components/AllInterviewPage";
import { prisma } from "@/utils/prismaClient";

const InterviewDashBoardPage = async () => {
  const interviews = await prisma.interview.findMany();

  if (!interviews.length) {
    return (
      <div className="md:px-10 px-3 my-8">
        <Banner />
        <div className="mt-10 space-y-10">
          <h1 className="text-6xl font-semibold text-neutral-700">
            No Interviews
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="md:px-10 px-3 my-8">
      <Banner />
      <AllInterviewPage interviews={interviews} />
    </div>
  );
};

export default InterviewDashBoardPage;
