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

      {/* Top Left - "Ame" Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-10"
      >
        <h1 className="text-white text-3xl md:text-4xl font-light tracking-wider">
          Ame
        </h1>
      </motion.div>

      {/* Bottom Right - Large "A" Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-10"
      >
        <h2 className="text-white/30 text-[12rem] md:text-[20rem] lg:text-[25rem] font-light leading-none">
          A
        </h2>
      </motion.div>

      {/* Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
    </section>
  );
}
