"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    title: "Brief",
    image: "/images/process-1.png",
  },
  {
    title: "Concepts",
    image: "/images/process-2.png",
  },
  {
    title: "Materials",
    image: "/images/process-3.png",
  },
  {
    title: "Creation",
    image: "/images/process-4.png",
  },
  {
    title: "Completion",
    image: "/images/process-5.png",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 md:py-32 bg-[#4A4836]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-16 md:mb-24"
        >
          Our process
        </motion.h2>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-sm">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-white text-lg md:text-xl font-normal">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
