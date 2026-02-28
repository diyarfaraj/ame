"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-[#2C2C2C] text-white">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-16"
          >
            <Link href="/" className="relative w-32 h-12 block">
              <Image
                src="/images/ame.png"
                alt="Amé Studio - Luxury Interior Design Dubai"
                fill
                className="object-contain"
                sizes="128px"
              />
            </Link>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
              Start your project with amé.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12">
              Tell us about your property...
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-3 bg-transparent border border-white/30 hover:bg-white hover:text-[#2C2C2C] transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase"
            >
              START YOUR PROJECT
            </Link>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-md mb-20"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Where emotion meets intention, and every space tells a quiet story of love and meaning.
            </p>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="pt-12 border-t border-white/10 flex items-center justify-between"
          >
            <a
              href="mailto:info@ame-studio.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              info@ame-studio.com
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/amestudio.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586551350874"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Copyright & Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-500 text-sm">
                Copyright Ame Studio 2026
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
