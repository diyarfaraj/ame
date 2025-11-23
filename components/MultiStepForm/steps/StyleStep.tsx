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
    { name: "Modern", icon: "🏢" },
    { name: "Traditional", icon: "🏛️" },
    { name: "Minimalist", icon: "⚪" },
    { name: "Transitional", icon: "🔄" },
    { name: "Contemporary", icon: "🎭" },
    { name: "Rustic", icon: "🌲" },
    { name: "Industrial", icon: "🏭" },
    { name: "Coastal", icon: "🌊" },
    { name: "Mediterranean", icon: "🏖️" },
    { name: "Scandinavian", icon: "❄️" },
    { name: "Mid-Century Modern", icon: "🕰️" },
    { name: "Eclectic", icon: "🎨" }
  ];

  const toggleStyle = (styleName: string) => {
    const current = formData.stylePreferences;
    if (current.includes(styleName)) {
      updateFormData({ stylePreferences: current.filter((s) => s !== styleName) });
    } else {
      updateFormData({ stylePreferences: [...current, styleName] });
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
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Design Aesthetics * (Select at least one)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {styles.map((style) => (
                <button
                  key={style.name}
                  onClick={() => toggleStyle(style.name)}
                  className={`p-4 border-2 transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                    formData.stylePreferences.includes(style.name)
                      ? "border-stone-800 bg-white shadow-md"
                      : "border-stone-300 bg-white hover:border-stone-400"
                  }`}
                >
                  <span className="text-2xl">{style.icon}</span>
                  <span className="text-sm font-light text-center">{style.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-3 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
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
            className="px-8 py-4 border-2 border-stone-300 text-stone-600 uppercase tracking-widest text-sm hover:border-stone-400 transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={formData.stylePreferences.length === 0}
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
