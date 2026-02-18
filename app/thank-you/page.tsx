"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-6">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center">
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
            Thank You!
          </h1>
          <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-12">
            We've received your consultation request and are excited to help bring your vision to life.
            We'll review your project details and get back to you within 24-48 hours.
          </p>

          <div className="space-y-4">
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
        </div>
      </motion.div>
    </div>
  );
}
