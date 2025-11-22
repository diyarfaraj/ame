"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/80 backdrop-blur-sm h-1">
        <motion.div
          className="h-full bg-stone-800"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="absolute top-4 right-6 text-xs text-stone-500 font-light tracking-wider">
        {currentStep + 1} / {totalSteps}
      </div>
    </div>
  );
}
