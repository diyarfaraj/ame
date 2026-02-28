"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Full Home Design",
    description:
      "A complete design service from floor plan to final styling. Every room, every detail, considered as one cohesive vision.",
  },
  {
    title: "Custom Furniture",
    description:
      "Pieces designed exclusively for your space. Handcrafted with premium materials to your exact specifications.",
  },
  {
    title: "Material Curation",
    description:
      "We source the finest materials globally — natural stones, premium fabrics, bespoke finishes — all curated for your home.",
  },
];

export default function BespokeContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section ref={ref} className="bg-[#F5F3F0] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-stone-800 mb-8">
              Design that starts with you.
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-4">
              Our Design for Living service is for homeowners who want more than furniture placement. It&apos;s a fully bespoke experience — from understanding how you live, to designing spaces that amplify your daily rituals.
            </p>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Every curve, texture, and material is chosen with intention. The result is a home that feels unmistakably yours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 md:mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                className="text-center"
              >
                <h3 className="font-heading text-xl md:text-2xl font-normal text-stone-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-base leading-relaxed max-w-sm mx-auto">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <Link
              href="/get-started"
              className="inline-block bg-stone-800 text-white hover:bg-stone-700 transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
