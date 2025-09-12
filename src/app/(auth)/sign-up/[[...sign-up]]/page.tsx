import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <DotBackgroundDemo>
      <SignUp />
    </DotBackgroundDemo>
  );
};

export default SignUpPage;
