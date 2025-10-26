"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white px-6 md:px-12 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <p className="text-stone-700 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
          "From the first conversation to the final touch, everything felt intentional.
          amé turned our vision into something we can truly feel."
        </p>
        <p className="text-stone-500 text-sm md:text-base">— Thomas R.</p>
      </motion.div>
    </section>
  );
}
