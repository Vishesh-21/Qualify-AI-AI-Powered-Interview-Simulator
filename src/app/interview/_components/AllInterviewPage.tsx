import React from "react";
import InterviewCard from "./InterviewCard";
import { InterviewProps } from "@/types/InterviewType";

const AllInterviewPage = ({ interviews }: InterviewProps) => {
  return (
    <div className="md:mt-10 mt-5 md:space-y-5 space-x-2">
      <h1 className="md:text-4xl text-2xl font-semibold mb-4">All Interviews</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {interviews.map((interview,index) => (
          <InterviewCard key={index} interview={interview}/>
        ))}
      </div>
    </div>
  );
};

export default AllInterviewPage;
