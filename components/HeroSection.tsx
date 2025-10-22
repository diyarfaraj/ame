"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Ame Interior Design - Minimalist living space with natural elements"
          fill
          priority
          quality={95}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-10"
      >
        <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest">
          A
        </h1>
      </motion.div>

      {/* Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
    </section>
  );
}
