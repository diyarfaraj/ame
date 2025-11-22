"use client";

import { motion } from "framer-motion";
import { FormData } from "../FormContainer";
import { useState } from "react";

interface ContactStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ContactStep({ formData, updateFormData, onNext, onBack }: ContactStepProps) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onNext();
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
          How can we reach you?
        </h2>
        <p className="text-stone-600 mb-12 font-light">
          We'll use this information to send you a personalized proposal.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-stone-600 mb-2 uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                updateFormData({ name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              className={`w-full px-6 py-4 border-2 ${
                errors.name ? "border-red-400" : "border-stone-300"
              } focus:border-stone-400 focus:outline-none transition-colors bg-white`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-2 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                updateFormData({ email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              className={`w-full px-6 py-4 border-2 ${
                errors.email ? "border-red-400" : "border-stone-300"
              } focus:border-stone-400 focus:outline-none transition-colors bg-white`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-2 uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                updateFormData({ phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: "" });
              }}
              className={`w-full px-6 py-4 border-2 ${
                errors.phone ? "border-red-400" : "border-stone-300"
              } focus:border-stone-400 focus:outline-none transition-colors bg-white`}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-stone-600 mb-2 uppercase tracking-wider">
              Additional Message (Optional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => updateFormData({ message: e.target.value })}
              rows={4}
              className="w-full px-6 py-4 border-2 border-stone-300 focus:border-stone-400 focus:outline-none transition-colors bg-white resize-none"
              placeholder="Anything else you'd like us to know..."
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
            onClick={handleSubmit}
            className="flex-1 bg-stone-800 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
}
