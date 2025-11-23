"use client";

import { motion } from "framer-motion";
import { FormData } from "../FormContainer";

interface BudgetStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BudgetStep({ formData, updateFormData, onNext, onBack }: BudgetStepProps) {
  const handleNext = () => {
    if (formData.timeline && formData.budgetRange) {
      onNext();
    }
  };

  const budgetRanges = [
    { range: "Under AED 180,000", icon: "💰" },
    { range: "AED 180,000 - 370,000", icon: "💵" },
    { range: "AED 370,000 - 920,000", icon: "💸" },
    { range: "AED 920,000 - 1,840,000", icon: "💎" },
    { range: "AED 1,840,000+", icon: "👑" }
  ];

  const timelines = [
    {
      time: "Immediately",
      icon: (
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      time: "1-3 months",
      icon: (
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      time: "3-6 months",
      icon: (
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      time: "6-12 months",
      icon: (
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      time: "Just exploring",
      icon: (
        <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-marcellus text-4xl md:text-5xl text-stone-800 mb-4">
          Timeline & Budget
        </h2>
        <p className="text-stone-600 mb-12 font-light">
          This helps us recommend the best approach for your project.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              When would you like to start? *
            </label>
            <div className="space-y-3">
              {timelines.map((item) => (
                <button
                  key={item.time}
                  onClick={() => updateFormData({ timeline: item.time })}
                  className={`w-full p-5 border-2 transition-all duration-300 text-left flex items-center gap-3 ${
                    formData.timeline === item.time
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <div className="text-stone-600">{item.icon}</div>
                  <span className="font-light">{item.time}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Estimated Budget Range *
            </label>
            <div className="space-y-3">
              {budgetRanges.map((item) => (
                <button
                  key={item.range}
                  onClick={() => updateFormData({ budgetRange: item.range })}
                  className={`w-full p-5 border-2 transition-all duration-300 text-left flex items-center gap-3 ${
                    formData.budgetRange === item.range
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-light">{item.range}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <button
            onClick={onBack}
            className="px-8 py-4 border-2 border-stone-300 text-stone-600 uppercase tracking-widest text-sm hover:border-stone-400 transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!formData.timeline || !formData.budgetRange}
            className="flex-1 bg-stone-800 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
          >
            Continue
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
