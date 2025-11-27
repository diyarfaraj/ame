"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  backgroundImage?: string;
}

export default function HeroSection({ backgroundImage = "/images/hero.png" }: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
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
        <Link href="/" className="block w-full h-full">
          <Image
            src="/images/ame.png"
            alt="Ame Interior Design"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80px, 112px"
            priority
          />
        </Link>
      </motion.div>

      {/* Bottom Right - Large "A" Watermark Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 right-0 z-10 w-44 h-44 md:w-[17rem] md:h-[17rem] lg:w-[22rem] lg:h-[22rem]"
      >
        <Image
          src="/images/A.png"
          alt="Ame Logo"
          fill
          className="object-contain object-bottom"
          sizes="(max-width: 768px) 176px, (max-width: 1024px) 272px, 352px"
        />
      </motion.div>

      {/* Gradient Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

      {/* Centered Hero Content - positioned slightly below center */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pt-40 md:pt-52">
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
          >
            Design that feels like home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white text-lg md:text-xl lg:text-2xl mb-16 md:mb-20 max-w-2xl mx-auto leading-relaxed"
          >
            We create warm, modern, neutral interiors designed around you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              href="/packages"
              className="inline-block border border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
