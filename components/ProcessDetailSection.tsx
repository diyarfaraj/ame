"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    number: "01.",
    title: "Brief & Understanding",
    description:
      "Every project begins with listening. We take time to understand your story, your rhythm, and what truly matters to you. This is more than a brief — it's a conversation that shapes everything to come.",
    image: "/images/process-1.png",
    imagePosition: "left",
  },
  {
    number: "02.",
    title: "CONCEPTS",
    description:
      "From emotion to idea. We translate your essence into a concept that captures both heart and harmony — a vision that feels unmistakably yours.",
    image: "/images/process-2.png",
    imagePosition: "right",
  },
  {
    number: "03.",
    title: "Materials",
    description:
      "We curate materials that speak softly yet powerfully. Honest textures, natural tones, and tactile balance — each element chosen to evoke emotion and endure time.",
    image: "/images/process-3.png",
    imagePosition: "left",
  },
  {
    number: "04.",
    title: "CREATION & BUILD",
    description:
      "Here, design becomes reality. Our craftsmen and designers work hand in hand to bring every precise detail to life, shaping environments made for someone loved.",
    image: "/images/process-4.png",
    imagePosition: "right",
  },
  {
    number: "05.",
    title: "COMPLETION",
    description:
      "The final moment is not about perfection, but presence. When you step inside, the space feels whole — deeply familiar, effortlessly yours.",
    image: "/images/process-5.png",
    imagePosition: "left",
  },
];

export default function ProcessDetailSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#4A4836] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-24">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
              step.imagePosition === "right" ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`relative flex ${
                step.imagePosition === "right" ? "md:col-start-2 md:justify-start" : "md:justify-end"
              } justify-center`}
            >
              <div className="relative w-3/5 md:w-3/4 aspect-[4/3]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 35vw"
                />
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`flex ${
                step.imagePosition === "right" ? "md:col-start-1 md:row-start-1 md:justify-end" : "md:justify-start"
              } justify-center`}
            >
              <div className="w-3/5 md:w-3/4 space-y-3">
                <p className="text-white/60 text-xs md:text-sm">{step.number}</p>
                <h3 className="font-heading text-white text-xl md:text-2xl font-normal uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
