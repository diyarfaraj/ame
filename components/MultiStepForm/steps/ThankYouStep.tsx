"use client";

import { motion } from "framer-motion";
import { FormData } from "../FormContainer";
import Link from "next/link";

interface ThankYouStepProps {
  formData: FormData;
}

export default function ThankYouStep({ formData }: ThankYouStepProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-20 h-20 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </motion.div>

          <h1 className="font-marcellus text-5xl md:text-6xl text-stone-800 mb-6">
            Thank You, {formData.name.split(" ")[0]}!
          </h1>
          <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-8">
            We've received your consultation request and are excited to help bring your vision to life.
            We'll review your project details and get back to you within 24-48 hours.
          </p>
        </div>

        <div className="bg-white border-2 border-stone-200 p-8 md:p-10 mb-8">
          <h3 className="font-marcellus text-2xl text-stone-800 mb-6">
            Your Project Summary
          </h3>
          <div className="space-y-4 text-stone-700">
            <div className="grid grid-cols-3 gap-4 pb-4 border-b border-stone-200">
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Project Type</p>
                <p className="font-light">{formData.projectType}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Space</p>
                <p className="font-light">{formData.spaceType}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Timeline</p>
                <p className="font-light">{formData.timeline}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-stone-200">
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Budget Range</p>
                <p className="font-light">{formData.budgetRange}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Selected Package</p>
                <p className="font-light">{formData.selectedPackage}</p>
              </div>
            </div>

            <div className="pb-4 border-b border-stone-200">
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Style Preferences</p>
              <p className="font-light">{formData.stylePreferences.join(", ")}</p>
            </div>

            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Contact</p>
              <p className="font-light">{formData.email}</p>
              <p className="font-light">{formData.phone}</p>
            </div>

            {formData.inspirations && (
              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Inspirations</p>
                <p className="font-light text-sm">{formData.inspirations}</p>
              </div>
            )}

            {formData.message && (
              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Additional Notes</p>
                <p className="font-light text-sm">{formData.message}</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-block bg-stone-800 text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300"
          >
            Return Home
          </Link>
          <p className="text-sm text-stone-500 font-light">
            In the meantime, feel free to explore our{" "}
            <Link href="/projects" className="underline hover:text-stone-800">
              portfolio
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
