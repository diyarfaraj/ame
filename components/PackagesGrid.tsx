"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const packages = [
  {
    title: "Starter Pack",
    price: "from 19,500",
    description: "Perfect for small spaces and first homes. Includes essential furniture pieces with timeless design.",
    image: "/images/STARTER.png",
    buttonText: "View Details",
  },
  {
    title: "Boutique Pack",
    price: "from 22,500",
    description: "Elevated comfort with curated pieces. Ideal for modern apartments and townhouses.",
    image: "/images/BOUTIQUE.png",
    buttonText: "View Details",
  },
  {
    title: "Signature Tailor-Made",
    price: "Price on Request",
    description: "Fully bespoke interior design. Custom furniture, materials, and finishing touches crafted exclusively for you.",
    image: "/images/SIGNATURE.png",
    buttonText: "View Details",
  },
];

export default function PackagesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-stone-800 mb-4">
            Our Packages
          </h2>
          <p className="text-stone-600 text-lg md:text-xl">
            Choose a package that fits your space
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group"
            >
              {/* Package Image */}
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Package Info */}
              <div className="space-y-3">
                <h3 className="font-heading text-2xl md:text-3xl font-normal text-stone-800">
                  {pkg.title}
                </h3>
                <p className="text-stone-700 text-lg md:text-xl font-medium">
                  {pkg.price}
                </p>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                  {pkg.description}
                </p>
                <button className="mt-4 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 px-8 py-3 text-sm tracking-wider uppercase">
                  {pkg.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
