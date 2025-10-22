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

      {/* Top Left - "Ame" Logo Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-10 w-20 h-8 md:w-28 md:h-11"
      >
        <Image
          src="/images/ame.png"
          alt="Ame Interior Design"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 80px, 112px"
          priority
        />
      </motion.div>

      {/* Bottom Right - Large "A" Watermark Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 right-0 md:bottom-8 md:right-8 z-10 w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]"
      >
        <Image
          src="/images/A.png"
          alt="Ame Logo"
          fill
          className="object-contain opacity-30"
          sizes="(max-width: 768px) 256px, (max-width: 1024px) 384px, 512px"
        />
      </motion.div>

      {/* Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
    </section>
  );
}
