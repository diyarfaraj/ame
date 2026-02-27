"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Design for Living", href: "/design-for-living" },
  { label: "Design for Investment", href: "/design-for-investment" },
  { label: "Our Process", href: "/our-process" },
  { label: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navigation Bar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative w-16 h-8 md:w-20 md:h-10 flex-shrink-0">
              <Image
                src="/images/ame.png"
                alt="Amé Studio"
                fill
                className={`object-contain object-left transition-all duration-300 ${
                  scrolled ? "brightness-0" : ""
                }`}
                sizes="80px"
                priority
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm tracking-wider uppercase transition-colors duration-300 hover:opacity-70 ${
                    scrolled ? "text-stone-800" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-6">
              {/* CTA Button - hidden on mobile */}
              <Link
                href="/get-started"
                className={`hidden lg:inline-block px-6 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 ${
                  scrolled
                    ? "bg-stone-800 text-white hover:bg-stone-700"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-stone-800"
                }`}
              >
                Start Your Project
              </Link>

              {/* Hamburger Button - visible on mobile, hidden on desktop */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-7 h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-stone-800" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-7 h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-stone-800" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-7 h-0.5 transition-colors duration-300 ${
                    scrolled ? "bg-stone-800" : "bg-white"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed left-0 top-0 bottom-0 w-full sm:w-2/3 md:w-1/2 bg-[#4A4836] z-[60] overflow-y-auto"
            >
              <div className="flex flex-col justify-between h-full p-8 md:p-12 lg:p-16">
                <div>
                  {/* Top row: Logo + Close button */}
                  <div className="flex items-center justify-between mb-16">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link href="/" onClick={toggleMenu} className="block relative w-16 h-8">
                        <Image
                          src="/images/ame.png"
                          alt="Amé Studio"
                          fill
                          className="object-contain object-left"
                          sizes="64px"
                        />
                      </Link>
                    </motion.div>
                    <button
                      onClick={toggleMenu}
                      className="w-10 h-10 flex items-center justify-center"
                      aria-label="Close menu"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Menu Items */}
                  <nav className="mb-12">
                    <ul className="space-y-5">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                        >
                          <Link
                            href={item.href}
                            onClick={toggleMenu}
                            className="text-white text-xl md:text-2xl font-light hover:text-gray-300 transition-colors duration-300 block"
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Bottom CTA */}
                <div>
                  <div className="border-t border-white/20 mb-8"></div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <Link
                      href="/get-started"
                      onClick={toggleMenu}
                      className="inline-block w-full text-center px-6 py-3.5 bg-white text-stone-800 text-sm tracking-wider uppercase hover:bg-gray-100 transition-colors duration-300"
                    >
                      Start Your Project
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
