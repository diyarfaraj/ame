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
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Project Type
                </p>
                <p className="font-light">{formData.projectType}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Space
                </p>
                <p className="font-light">{formData.spaceType}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Timeline
                </p>
                <p className="font-light">{formData.timeline}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-stone-200">
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Budget Range
                </p>
                <p className="font-light">{formData.budgetRange}</p>
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Selected Package
                </p>
                <p className="font-light">{formData.selectedPackage}</p>
              </div>
            </div>

            <div className="pb-4 border-b border-stone-200">
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Style Preferences
              </p>
              <p className="font-light">{formData.stylePreferences.join(", ")}</p>
            </div>

            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Contact
              </p>
              <p className="font-light flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-stone-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {formData.email}
              </p>
              <p className="font-light flex items-center gap-2">
                <svg className="w-4 h-4 text-stone-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {formData.phone}
              </p>
            </div>

            {formData.inspirations && (
              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Inspirations
                </p>
                <p className="font-light text-sm">{formData.inspirations}</p>
              </div>
            )}

            {formData.message && (
              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Additional Notes
                </p>
                <p className="font-light text-sm">{formData.message}</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-stone-800 text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </Link>
          <p className="text-sm text-stone-500 font-light flex items-center justify-center gap-2">
            <span>In the meantime, feel free to explore our</span>
            <Link href="/projects" className="underline hover:text-stone-800 inline-flex items-center gap-1">
              portfolio
              <svg className="w-3 h-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
