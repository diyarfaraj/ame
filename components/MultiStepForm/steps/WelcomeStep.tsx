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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="inline-block mb-8"
        >
          <svg
            className="w-24 h-24 text-stone-800 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </motion.div>

        <h1 className="font-marcellus text-5xl md:text-6xl lg:text-7xl text-stone-800 mb-6">
          Let's Create Something Beautiful
        </h1>
        <p className="text-stone-600 text-lg md:text-xl mb-12 font-light leading-relaxed">
          This will only take a few minutes. We'll ask you about your project, style preferences,
          and how we can help bring your vision to life.
        </p>

        <div className="flex items-center justify-center gap-8 mb-12 text-stone-600">
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-light">3 minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm font-light">7 questions</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-light">Free consultation</span>
          </div>
        </div>

        <button
          onClick={onNext}
          className="bg-stone-800 text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300 inline-flex items-center gap-2"
        >
          Get Started
          <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
