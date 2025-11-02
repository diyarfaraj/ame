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
                alt="Ame Interior Design"
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
              Start your journey with amé.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12">
              Tell us a little bit more...
            </p>
            <button className="bg-transparent border border-white/30 hover:bg-white hover:text-[#2C2C2C] transition-all duration-300 px-10 py-4 text-sm tracking-widest uppercase">
              LET'S CHAT
            </button>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-white/10"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-4 text-gray-400">
                CONTACT
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>Telephone number</p>
                <p>Email Address</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="text-gray-300">Address goes here</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 md:justify-end items-start">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Pinterest
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-gray-500 text-sm">
              Copyright Ame Studio 2025
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
