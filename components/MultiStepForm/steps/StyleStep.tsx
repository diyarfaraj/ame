"use client";

import { motion } from "framer-motion";
import { FormData } from "../FormContainer";

interface StyleStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StyleStep({ formData, updateFormData, onNext, onBack }: StyleStepProps) {
  const handleNext = () => {
    if (formData.stylePreferences.length > 0) {
      onNext();
    }
  };

  const styles = [
    "Modern",
    "Traditional",
    "Minimalist",
    "Transitional",
    "Contemporary",
    "Rustic",
    "Industrial",
    "Coastal",
    "Mediterranean",
    "Scandinavian",
    "Mid-Century Modern",
    "Eclectic"
  ];

  const toggleStyle = (style: string) => {
    const current = formData.stylePreferences;
    if (current.includes(style)) {
      updateFormData({ stylePreferences: current.filter((s) => s !== style) });
    } else {
      updateFormData({ stylePreferences: [...current, style] });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-marcellus text-4xl md:text-5xl text-stone-800 mb-4">
          Your style preferences
        </h2>
        <p className="text-stone-600 mb-12 font-light">
          Select all styles that resonate with you. Choose as many as you like.
        </p>

        <div className="space-y-8">
          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              Design Aesthetics * (Select at least one)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => toggleStyle(style)}
                  className={`p-4 border-2 transition-all duration-300 ${
                    formData.stylePreferences.includes(style)
                      ? "border-stone-800 bg-white"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="text-sm font-light">{style}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider">
              Inspirations or Notes (Optional)
            </label>
            <textarea
              value={formData.inspirations}
              onChange={(e) => updateFormData({ inspirations: e.target.value })}
              placeholder="Share any specific inspirations, Pinterest boards, or details about your vision..."
              rows={5}
              className="w-full px-6 py-4 border-2 border-stone-300 focus:border-stone-400 focus:outline-none transition-colors bg-white resize-none"
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
            disabled={formData.stylePreferences.length === 0}
            className="flex-1 bg-stone-800 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
