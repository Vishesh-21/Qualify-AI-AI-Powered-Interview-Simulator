import { ToggleMode } from "@/components/ToggleMode";
import { Button } from "@/components/ui/button";
import React from "react";

const HomeComponent = () => {
  return (
    <div>
      <h1 className="text-4xl gradient-title">Qualify Ai</h1>
      <h1>This is my home component</h1>
      <Button>Home button</Button>
      <ToggleMode />
    </div>
  );
};

export default HomeComponent;
