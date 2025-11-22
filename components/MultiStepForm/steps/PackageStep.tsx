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
      features: ["Design consultation", "Mood board", "Shopping list"]
    },
    {
      name: "Boutique",
      description: "Ideal for complete room transformations",
      features: ["Full design plans", "3D renderings", "Project management", "Sourcing"]
    },
    {
      name: "Signature",
      description: "Comprehensive whole-home design experience",
      features: ["Complete design service", "Custom furnishings", "White-glove service", "Ongoing support"]
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
                  ? "border-stone-800 bg-white"
                  : "border-stone-300 bg-white hover:border-stone-400"
              }`}
            >
              <h3 className="font-marcellus text-2xl text-stone-800 mb-3">
                {pkg.name}
              </h3>
              <p className="text-stone-600 text-sm font-light mb-6 leading-relaxed">
                {pkg.description}
              </p>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="text-stone-700 text-sm font-light flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="px-8 py-4 border-2 border-stone-300 text-stone-600 uppercase tracking-widest text-sm hover:border-stone-400 transition-colors duration-300"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!formData.selectedPackage}
            className="flex-1 bg-stone-800 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
