"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 bg-[#d5d1c8]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-stone-800 mb-12 leading-tight"
        >
          Creating interiors that move you
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 text-stone-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          <p className="text-balance">
            We don't just design spaces – we translate emotion into form. Every curve, texture, and
            line is shaped with intention, carrying both soul and structure. Our work is calm, timeless,
            and deeply personal – a quiet dialogue between design and feeling.
          </p>

          <p className="text-balance pt-4">
            Because a home should not only look beautiful. It should feel like you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
