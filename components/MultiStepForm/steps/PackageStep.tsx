"use client";

import { motion } from "framer-motion";
import { FormData } from "../FormContainer";

interface PackageStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function PackageStep({ formData, updateFormData, onNext, onBack }: PackageStepProps) {
  const handleNext = () => {
    if (formData.selectedPackage) {
      onNext();
    }
  };

  const packages = [
    {
      name: "Starter",
      description: "Perfect for single-room refreshes or consultations",
      icon: "✨",
      features: [
        { text: "Design consultation", icon: "💬" },
        { text: "Mood board", icon: "🎨" },
        { text: "Shopping list", icon: "📝" }
      ]
    },
    {
      name: "Boutique",
      description: "Ideal for complete room transformations",
      icon: "🌟",
      features: [
        { text: "Full design plans", icon: "📐" },
        { text: "3D renderings", icon: "🖼️" },
        { text: "Project management", icon: "📊" },
        { text: "Sourcing", icon: "🔍" }
      ]
    },
    {
      name: "Signature",
      description: "Comprehensive whole-home design experience",
      icon: "👑",
      features: [
        { text: "Complete design service", icon: "✅" },
        { text: "Custom furnishings", icon: "🪑" },
        { text: "White-glove service", icon: "🤍" },
        { text: "Ongoing support", icon: "💫" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-marcellus text-4xl md:text-5xl text-stone-800 mb-4">
          Choose your package
        </h2>
        <p className="text-stone-600 mb-12 font-light">
          Select the service level that best fits your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <button
              key={pkg.name}
              onClick={() => updateFormData({ selectedPackage: pkg.name })}
              className={`p-8 border-2 transition-all duration-300 text-left ${
                formData.selectedPackage === pkg.name
                  ? "border-stone-800 bg-white shadow-lg"
                  : "border-stone-300 bg-white hover:border-stone-400"
              }`}
            >
              <div className="text-4xl mb-4">{pkg.icon}</div>
              <h3 className="font-marcellus text-2xl text-stone-800 mb-3">
                {pkg.name}
              </h3>
              <p className="text-stone-600 text-sm font-light mb-6 leading-relaxed">
                {pkg.description}
              </p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature.text} className="text-stone-700 text-sm font-light flex items-center gap-2">
                    <span className="text-lg">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
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
            disabled={!formData.selectedPackage}
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
