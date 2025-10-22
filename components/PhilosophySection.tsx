"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 bg-[#d5d1c8]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-12 leading-tight">
          Creating interiors that move you
        </h2>

        <div className="space-y-6 text-stone-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p className="text-balance">
            We don't just design spaces – we translate emotion into form. Every curve, texture, and
            line is shaped with intention, carrying both soul and structure. Our work is calm, timeless,
            and deeply personal – a quiet dialogue between design and feeling.
          </p>

          <p className="text-balance pt-4">
            Because a home should not only look beautiful. It should feel like you.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
