"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutDesigner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[50vh] lg:min-h-[80vh]"
        >
          <Image
            src="/images/designer.png"
            alt="Briar Faraj - Founder & Lead Interior Designer"
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right Column - Designer Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-cream-50 flex items-center p-8 md:p-12 lg:p-16 xl:p-20 min-h-[50vh] lg:min-h-[80vh]"
        >
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-stone-500 mb-4 text-sm tracking-widest uppercase"
            >
              Meet the Founder
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-stone-800 mb-4"
            >
              Briar Faraj
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-stone-600 mb-8 text-sm tracking-wide uppercase"
            >
              Founder & Lead Interior Designer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 text-stone-600 leading-relaxed text-base md:text-lg"
            >
              <p>
                Guided by intuition and emotion, Briar shapes spaces that feel as personal as they are timeless.
                With a deep appreciation for natural materials and thoughtful details, she creates environments
                that speak to the soul.
              </p>
              <p>
                Every project begins with listening – understanding not just how you live, but how you want to feel
                in your space. This philosophy drives everything we do at Amé Studio.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
