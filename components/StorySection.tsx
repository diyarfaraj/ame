"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#FCF9F4] px-6 md:px-12 py-32 md:py-40 lg:py-48">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:pr-8"
          >
            {/* Heading */}
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-normal text-stone-800 leading-tight">
              Simplicity & Elegance
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-stone-600 text-xs md:text-sm leading-relaxed">
              <p>
                Originally from Sweden, Briar Faraj began his journey as a professional football player before discovering a deeper passion for aesthetics and design.
              </p>
              <p>
                After years of travel and creative exploration, he founded Amé Studio in Dubai — a reflection of his belief that spaces should feel alive, soulful, and intentional.
              </p>
              <p>
                Blending Scandinavian simplicity with the warmth and elegance of the Middle East, Briar's vision is to create interiors that bring calm, beauty, and meaning into everyday life.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative lg:pl-8 flex justify-center"
          >
            <div className="relative w-4/5 lg:w-3/4 aspect-[3/4]">
              <Image
                src="/images/designer-process.png"
                alt="Briar Faraj - Founder of Amé Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
