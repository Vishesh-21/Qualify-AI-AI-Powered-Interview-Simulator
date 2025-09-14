"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-black px-6">
      {/* Animated 404 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg text-slate-600 dark:text-slate-400 text-center max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or may have been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 z-20"
      >
        <Link href="/">
          <Button className="shadow-md" variant={"ghost"}>
            <ArrowLeft className="h-8 w-8" /> Go Back Home
          </Button>
        </Link>
      </motion.div>

      {/* Decorative gradient glow */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
        className="absolute bottom-40 w-40 h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full"
      />
    </div>
  );
}
