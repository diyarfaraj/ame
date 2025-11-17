"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PackagesHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero bild.png"
          alt="Furniture & Interior Packages"
          fill
          priority
          quality={95}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 md:px-12 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-6 leading-tight max-w-5xl"
        >
          Furniture & Interior Packages for Every Home
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl leading-relaxed"
        >
          Turnkey furnishing solutions designed for effortless living — thoughtfully crafted for homeowners, landlords, and short-term rentals.
        </motion.p>
      </div>
    </section>
  );
}
