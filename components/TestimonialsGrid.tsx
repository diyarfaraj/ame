"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Am\u00e9 delivered in 12 days. My listing was live immediately and fully booked within the first month. No delays, no budget changes.",
    name: "Ahmed K.",
    detail: "1BR Holiday Home, Dubai Marina",
  },
  {
    quote:
      "The fixed price was exactly what we paid. No hidden costs. As investors, that predictability matters.",
    name: "Sarah M.",
    detail: "Investment Apartment, JVC",
  },
  {
    quote:
      "I live abroad and never visited during the setup. They handled everything. When I arrived, it felt complete.",
    name: "Daniel R.",
    detail: "Holiday Home Owner, Downtown Dubai",
  },
];

export default function TestimonialsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#d5d1c8] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-stone-800 text-center mb-16 md:mb-20"
        >
          What our clients say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              className="bg-white p-8 md:p-10 rounded-sm"
            >
              <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-heading text-stone-800 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-stone-500 text-sm">
                  {testimonial.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
