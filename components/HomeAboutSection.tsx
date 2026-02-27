"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "Bespoke Roots",
    description:
      "We started with a passion for custom, high-end residential interiors.",
  },
  {
    title: "Investment Logic",
    description:
      "We evolved to help investors maximize ROI through rapid, turn-key delivery.",
  },
  {
    title: "The Am\u00e9 Standard",
    description:
      'Whether it\u2019s a 14-day furniture package or a months-long custom renovation, our commitment to "Quiet Luxury" and fixed-price transparency remains the same.',
  },
];

export default function HomeAboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#d5d1c8] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-stone-800 text-center mb-8"
        >
          Scandinavian Precision. Dubai Ambition.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-4">
            Am&eacute; Studio was born from a simple observation: Dubai&apos;s property market moves at lightning speed, but interior design often lags behind. Founded on the principles of <strong className="text-stone-700">Scandinavian minimalism</strong> and <strong className="text-stone-700">European efficiency</strong>, we bridge the gap between high-end aesthetics and investment practicality.
          </p>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            We don&apos;t believe you should have to choose between a beautiful home and a profitable investment. Our &ldquo;Emotion meets Intention&rdquo; philosophy ensures that every space we create isn&apos;t just visually stunning &mdash; it&apos;s designed to perform.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="font-heading text-2xl md:text-3xl font-normal text-stone-800 text-center mb-12"
        >
          Why Am&eacute;?
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 md:mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.15, ease: "easeOut" }}
              className="text-center"
            >
              <h4 className="font-heading text-xl md:text-2xl font-normal text-stone-800 mb-3">
                {reason.title}
              </h4>
              <p className="text-stone-600 text-base leading-relaxed max-w-sm mx-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-stone-700 text-lg md:text-xl leading-relaxed italic mb-4">
            &ldquo;I founded Am&eacute; Studio to give owners a stress-free way to furnish their properties. We handle the complexity of Dubai&apos;s logistics so you can focus on the lifestyle or the yields. We don&apos;t just furnish rooms; we optimize assets.&rdquo;
          </p>
          <p className="text-stone-500 text-sm tracking-wider uppercase">
            &mdash; The Founder
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
