"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GlobalClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#4A4836] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-8"
        >
          Ready to maximize your property&apos;s potential?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/get-started"
            className="inline-block bg-white text-stone-800 hover:bg-gray-100 transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
