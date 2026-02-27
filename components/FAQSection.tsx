"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqItems = [
  {
    question: "How long does it take to furnish a holiday home in Dubai?",
    answer:
      "Our standard turnaround is 7 to 14 days from concept approval. For turn-key packages, most properties are guest-ready within two weeks.",
  },
  {
    question: "What is included in a turn-key furniture package?",
    answer:
      "Everything from furniture and lighting to linens, kitchenware, and styling. You receive a fully furnished, photo-ready property with nothing left to buy.",
  },
  {
    question: "Do you offer fixed-price guarantees?",
    answer:
      "Yes. Once the design is locked, you receive a 100% fixed-price guarantee. The quote is the final invoice \u2014 no hidden fees, no surprises.",
  },
  {
    question: "Can you handle bespoke design for residences?",
    answer:
      "Absolutely. Our Design for Living service offers fully bespoke residential design tailored to your lifestyle, from concept to completion.",
  },
  {
    question: "How does design increase my ROI?",
    answer:
      "High-end, algorithm-optimized design commands higher nightly rates and better occupancy on platforms like Airbnb. Professional photography and staging are included.",
  },
  {
    question: "Do I need to be in Dubai during installation?",
    answer:
      "No. We provide a completely hands-off experience. Many of our clients live abroad and never visit during the setup. We handle everything remotely.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal text-stone-800 text-center mb-16 md:mb-20"
        >
          Frequently asked questions
        </motion.h2>

        <div className="space-y-0 divide-y divide-stone-200">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08, ease: "easeOut" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-heading text-lg md:text-xl text-stone-800 pr-8">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-stone-400 flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-stone-600 text-base leading-relaxed pb-6">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
