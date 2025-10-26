"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mainMenuItems = [
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Website", href: "/" },
  ];

  const secondaryMenuItems = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Hamburger Button - Fixed to top right */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        onClick={toggleMenu}
        className="fixed top-8 right-8 md:top-12 md:right-12 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-0.5 bg-white transition-colors"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-0.5 bg-white transition-colors"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-0.5 bg-white transition-colors"
        />
      </motion.button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            {/* Slide-in Menu - Left Side */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed left-0 top-0 bottom-0 w-full sm:w-1/2 md:w-1/3 bg-[#4A4836] z-40 overflow-y-auto"
            >
              <div className="flex flex-col justify-between h-full p-8 md:p-12 lg:p-16">
                {/* Top Section */}
                <div>
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                  >
                    <div className="relative w-16 h-8">
                      <Image
                        src="/images/ame.png"
                        alt="Ame"
                        fill
                        className="object-contain object-left"
                        sizes="64px"
                      />
                    </div>
                  </motion.div>

                  {/* Main Menu Items */}
                  <nav className="mb-16">
                    <ul className="space-y-4">
                      {mainMenuItems.map((item, index) => (
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

                {/* Bottom Section */}
                <div>
                  {/* Divider Line */}
                  <div className="border-t border-white/20 mb-8"></div>

                  {/* Secondary Menu Items */}
                  <nav>
                    <ul className="space-y-3">
                      {secondaryMenuItems.map((item, index) => (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index + 0.6 }}
                        >
                          <Link
                            href={item.href}
                            onClick={toggleMenu}
                            className="text-white/80 text-base md:text-lg font-light hover:text-white transition-colors duration-300 block"
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
