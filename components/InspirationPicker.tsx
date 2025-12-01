"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const inspirationImages = [
  { src: "/images/inspiration/Bold-Minimal-Living-Composition.png", name: "Bold-Minimal-Living-Composition" },
  { src: "/images/inspiration/Desert-Minimal-Living-Glow.png", name: "Desert-Minimal-Living-Glow" },
  { src: "/images/inspiration/Earthy-Modern-Minimal-Living-01.png", name: "Earthy-Modern-Minimal-Living-01" },
  { src: "/images/inspiration/Italian-Contemporary-Living-GoldMarble.png", name: "Italian-Contemporary-Living-GoldMarble" },
  { src: "/images/inspiration/Japandi-Warm-Minimal-Concept.png", name: "Japandi-Warm-Minimal-Concept" },
  { src: "/images/inspiration/Light-Scandi-Interior-Serenity.png", name: "Light-Scandi-Interior-Serenity" },
  { src: "/images/inspiration/Light-Scandi-Living-Concept.png", name: "Light-Scandi-Living-Concept" },
  { src: "/images/inspiration/Moody-Modern-Glam-Living-01.png", name: "Moody-Modern-Glam-Living-01" },
  { src: "/images/inspiration/Natural-Tone-Living-Serenity.png", name: "Natural-Tone-Living-Serenity" },
  { src: "/images/inspiration/Organic-Minimal-Living-Serenity.png", name: "Organic-Minimal-Living-Serenity" },
  { src: "/images/inspiration/Parisian-Modern-Luxury-Salon-01.png", name: "Parisian-Modern-Luxury-Salon-01" },
  { src: "/images/inspiration/Scandinavian-Soft-Living-Dubai-View.png", name: "Scandinavian-Soft-Living-Dubai-View" },
  { src: "/images/inspiration/Sculptural-Minimal-Interior-Concept.png", name: "Sculptural-Minimal-Interior-Concept" },
  { src: "/images/inspiration/Warm-Minimal-Modern-Interior-01.png", name: "Warm-Minimal-Modern-Interior-01" },
  { src: "/images/inspiration/Warm-Neutral-Living-Earthy-Modern.png", name: "Warm-Neutral-Living-Earthy-Modern" },
  { src: "/images/inspiration/Warm-Soft-Modern-Living-Concept.png", name: "Warm-Soft-Modern-Living-Concept" },
  { src: "/images/inspiration/Warm-Wood-Minimal-Atmosphere.png", name: "Warm-Wood-Minimal-Atmosphere" },
];

interface InspirationPickerProps {
  onNext: (selectedImages: string[]) => void;
  onSkip: () => void;
}

export default function InspirationPicker({ onNext, onSkip }: InspirationPickerProps) {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const toggleImage = (name: string) => {
    setSelectedImages((prev) =>
      prev.includes(name)
        ? prev.filter((img) => img !== name)
        : [...prev, name]
    );
  };

  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden lg:block h-screen bg-[#FAF9F7] overflow-hidden">
        <div className="h-full flex">
          {/* Left Column - Sticky Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[45%] flex flex-col justify-center px-20"
          >
            <h2 className="font-heading text-[3.5rem] font-normal text-stone-800 mb-6 leading-[1.1]">
              Tell us what you love.
            </h2>
            <p className="text-stone-500 text-lg">
              The more you choose, the better we understand your style.
            </p>
          </motion.div>

          {/* Right Column - Scrollable Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-[55%] flex flex-col h-full"
          >
            {/* Scrollable Grid Area */}
            <div className="flex-1 overflow-y-auto px-4 pt-8 pb-24">
              <div className="columns-3 gap-3 space-y-3">
                {inspirationImages.map((image, index) => (
                  <motion.button
                    key={image.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                    onClick={() => toggleImage(image.name)}
                    className={`relative w-full break-inside-avoid mb-3 overflow-hidden rounded-sm transition-all duration-300 ${
                      selectedImages.includes(image.name)
                        ? "ring-2 ring-[#C4A484] ring-offset-2"
                        : "hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      width={300}
                      height={index % 3 === 0 ? 400 : index % 3 === 1 ? 300 : 350}
                      className="w-full h-auto object-cover"
                      sizes="18vw"
                    />
                    {selectedImages.includes(image.name) && (
                      <div className="absolute inset-0 bg-[#C4A484]/20 flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#C4A484] rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sticky Action Buttons */}
            <div className="absolute bottom-0 right-0 w-[55%] bg-gradient-to-t from-[#FAF9F7] via-[#FAF9F7] to-transparent pt-8 pb-8 px-8">
              <div className="flex items-center justify-end gap-6">
                <button
                  onClick={onSkip}
                  className="text-stone-400 hover:text-stone-600 text-sm tracking-wide transition-colors duration-300"
                >
                  I don&apos;t like these. Skip.
                </button>
                <button
                  onClick={() => onNext(selectedImages)}
                  className="bg-[#C4A484] hover:bg-[#B39374] text-white px-10 py-3.5 text-sm tracking-wider uppercase transition-all duration-300 rounded-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Layout - Simple scrollable page */}
      <section className="lg:hidden min-h-screen bg-[#FAF9F7] pb-24">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 pt-12 pb-8"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-normal text-stone-800 mb-4 leading-[1.1]">
            Tell us what you love.
          </h2>
          <p className="text-stone-500 text-base">
            The more you choose, the better we understand your style.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="px-4">
          <div className="columns-2 gap-2 space-y-2">
            {inspirationImages.map((image, index) => (
              <motion.button
                key={`mobile-${image.name}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.02 }}
                onClick={() => toggleImage(image.name)}
                className={`relative w-full break-inside-avoid mb-2 overflow-hidden rounded-sm transition-all duration-300 ${
                  selectedImages.includes(image.name)
                    ? "ring-2 ring-[#C4A484] ring-offset-1"
                    : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  width={200}
                  height={index % 3 === 0 ? 280 : index % 3 === 1 ? 200 : 240}
                  className="w-full h-auto object-cover"
                  sizes="45vw"
                />
                {selectedImages.includes(image.name) && (
                  <div className="absolute inset-0 bg-[#C4A484]/20 flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#C4A484] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Fixed Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#FAF9F7] border-t border-stone-200 px-6 py-4 z-40">
          <div className="flex items-center justify-between">
            <button
              onClick={onSkip}
              className="text-stone-400 hover:text-stone-600 text-sm tracking-wide transition-colors duration-300"
            >
              Skip
            </button>
            <button
              onClick={() => onNext(selectedImages)}
              className="bg-[#C4A484] hover:bg-[#B39374] text-white px-8 py-3 text-sm tracking-wider uppercase transition-all duration-300 rounded-sm"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
