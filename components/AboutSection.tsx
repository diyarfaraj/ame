"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full">
      {/* Full Width Image with Text Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-[70vh] lg:min-h-screen"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/staircase.png"
            alt="Architectural detail showing craftsmanship"
            fill
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        <div className="relative h-full min-h-[70vh] lg:min-h-screen flex flex-col justify-end p-8 md:p-12 lg:p-16 text-white">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight max-w-2xl"
          >
            Made with intention
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-cream-50 mb-8 max-w-xl leading-relaxed"
          >
            Every detail is chosen with feeling, shaped by craftsmanship, and guided by authenticity.
          </motion.p>

          <Link href="/packages">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-white/80 hover:bg-white hover:text-stone-900 transition-all duration-300 px-8 py-3 text-sm tracking-wider uppercase w-fit"
            >
              Find out more
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
