import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <DotBackgroundDemo>
      <SignIn />
    </DotBackgroundDemo>
  );
};

export default SignInPage;
