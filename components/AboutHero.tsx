"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/staircase.png"
          alt="Amé Studio - Interior Design"
          fill
          priority
          quality={95}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Top Left - Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-10 w-20 h-8 md:w-28 md:h-11"
      >
        <Link href="/" className="block w-full h-full">
          <Image
            src="/images/ame.png"
            alt="Amé Studio"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80px, 112px"
            priority
          />
        </Link>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-white text-center px-6"
        >
          About Us
        </motion.h1>
      </div>
    </section>
  );
}
