"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Background Image with Text Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[60vh] lg:min-h-screen"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/staircase.png"
              alt="Architectural detail showing craftsmanship"
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>

          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 text-white">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-light mb-6 leading-tight"
            >
              Made with intention
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-cream-50 mb-8 max-w-md leading-relaxed"
            >
              Every detail is chosen with feeling, shaped by craftsmanship, and guided by authenticity.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-white/80 hover:bg-white hover:text-stone-900 transition-all duration-300 px-8 py-3 text-sm tracking-wider uppercase w-fit"
            >
              Find out more
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column - Designer Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-cream-50 flex items-center justify-center p-8 md:p-12 lg:p-16 min-h-[60vh] lg:min-h-screen"
        >
          <div className="max-w-md mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
            >
              Briar Faraj
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-stone-600 mb-12 text-sm tracking-wide uppercase"
            >
              Founder & Lead Interior Designer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <div className="relative w-64 h-80 mx-auto rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/designer.png"
                  alt="Briar Faraj - Interior Designer"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 256px"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-stone-600 leading-relaxed text-base md:text-lg"
            >
              Guided by intuition and emotion, Briar shapes spaces that feel as personal as they are timeless.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
