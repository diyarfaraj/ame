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
              {["Residential", "Commercial"].map((type) => (
                <button
                  key={type}
                  onClick={() => updateFormData({ projectType: type })}
                  className={`p-6 border-2 transition-all duration-300 ${
                    formData.projectType === type
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="text-lg font-light">{type}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              Space Type *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Full Home", "Kitchen", "Bathroom", "Living Room", "Bedroom", "Office", "Restaurant", "Retail"].map((space) => (
                <button
                  key={space}
                  onClick={() => updateFormData({ spaceType: space })}
                  className={`p-4 border-2 transition-all duration-300 text-sm ${
                    formData.spaceType === space
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  {space}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              Approximate Square Footage (Optional)
            </label>
            <input
              type="text"
              value={formData.squareFootage}
              onChange={(e) => updateFormData({ squareFootage: e.target.value })}
              placeholder="e.g., 1,500 sq ft"
              className="w-full px-6 py-4 border-2 border-stone-300 focus:border-stone-400 focus:outline-none transition-colors bg-white"
            />
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
            disabled={!formData.projectType || !formData.spaceType}
            className="flex-1 bg-stone-800 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
