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
    "Under $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000+"
  ];

  const timelines = [
    "Immediately",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "Just exploring"
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
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              When would you like to start? *
            </label>
            <div className="space-y-3">
              {timelines.map((timeline) => (
                <button
                  key={timeline}
                  onClick={() => updateFormData({ timeline })}
                  className={`w-full p-5 border-2 transition-all duration-300 text-left ${
                    formData.timeline === timeline
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="font-light">{timeline}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              Estimated Budget Range *
            </label>
            <div className="space-y-3">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => updateFormData({ budgetRange: range })}
                  className={`w-full p-5 border-2 transition-all duration-300 text-left ${
                    formData.budgetRange === range
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="font-light">{range}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <button
            onClick={onBack}
            className="px-8 py-4 border-2 border-stone-300 text-stone-600 uppercase tracking-widest text-sm hover:border-stone-400 transition-colors duration-300"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!formData.timeline || !formData.budgetRange}
            className="flex-1 bg-stone-800 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
