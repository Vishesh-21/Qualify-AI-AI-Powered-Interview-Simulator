"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };


  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer relative z-20"
    >
      <Sun className="h-[2rem] w-[2rem] transition-all hidden dark:block" />
      <Moon className="h-[2rem] w-[2rem] block dark:hidden transition-all" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
