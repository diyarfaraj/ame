"use client";

import { motion } from "framer-motion";
import { FormData } from "../FormContainer";

interface ProjectStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ProjectStep({ formData, updateFormData, onNext, onBack }: ProjectStepProps) {
  const handleNext = () => {
    if (formData.projectType && formData.spaceType) {
      onNext();
    }
  };

  const projectTypes = [
    {
      name: "Residential",
      icon: (
        <svg className="w-10 h-10 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: "Commercial",
      icon: (
        <svg className="w-10 h-10 mb-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const spaceTypes = [
    { name: "Full Home", icon: "🏠" },
    { name: "Kitchen", icon: "🍳" },
    { name: "Bathroom", icon: "🛁" },
    { name: "Living Room", icon: "🛋️" },
    { name: "Bedroom", icon: "🛏️" },
    { name: "Office", icon: "💼" },
    { name: "Restaurant", icon: "🍽️" },
    { name: "Retail", icon: "🏪" },
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
          Tell us about your project
        </h2>
        <p className="text-stone-600 mb-12 font-light">
          Help us understand what you're looking to create.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              Project Type *
            </label>
            <div className="grid grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => updateFormData({ projectType: type.name })}
                  className={`p-6 border-2 transition-all duration-300 flex flex-col items-center justify-center ${
                    formData.projectType === type.name
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  {type.icon}
                  <span className="text-lg font-light">{type.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              Space Type *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {spaceTypes.map((space) => (
                <button
                  key={space.name}
                  onClick={() => updateFormData({ spaceType: space.name })}
                  className={`p-4 border-2 transition-all duration-300 text-sm flex flex-col items-center justify-center ${
                    formData.spaceType === space.name
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="text-2xl mb-2">{space.icon}</span>
                  <span className="font-light">{space.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              Approximate Square Footage (Optional)
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.squareFootage}
                onChange={(e) => updateFormData({ squareFootage: e.target.value })}
                placeholder="e.g., 1,500 sq ft"
                className="w-full px-6 py-4 border-2 border-stone-300 focus:border-stone-400 focus:outline-none transition-colors bg-white"
              />
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
            disabled={!formData.projectType || !formData.spaceType}
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
