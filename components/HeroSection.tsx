"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

export default function HeroSection({
  backgroundImage = "/images/new-hero.jpeg",
  title = "Holiday home furnishing in Dubai \u2014 guest-ready in 14 days.",
  subtitle = "One fixed price. One point of contact. Ready to list and earn.",
  showButtons = true,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Luxury interior design and holiday home furnishing in Dubai by Amé Studio"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 pointer-events-none" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/90 text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {showButtons && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/design-for-investment"
                  className="w-full sm:w-auto inline-block bg-[#C4A484] text-white hover:bg-[#B39374] transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase text-center"
                >
                  View Furnishing Packages
                </Link>
                <Link
                  href="/get-started"
                  className="w-full sm:w-auto inline-block border border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase text-center"
                >
                  Start a Custom Project
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-white/60 text-sm mt-6"
              >
                No commitment. We&apos;ll tell you exactly what your property needs.
              </motion.p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
