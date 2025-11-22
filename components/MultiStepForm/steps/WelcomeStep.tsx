"use client";

import { motion } from "framer-motion";

interface WelcomeStepProps {
  onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="font-marcellus text-5xl md:text-6xl lg:text-7xl text-stone-800 mb-6">
          Let's Create Something Beautiful
        </h1>
        <p className="text-stone-600 text-lg md:text-xl mb-12 font-light leading-relaxed">
          This will only take a few minutes. We'll ask you about your project, style preferences,
          and how we can help bring your vision to life.
        </p>
        <button
          onClick={onNext}
          className="bg-stone-800 text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
