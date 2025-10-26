"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Wet Room",
    image: "/images/project-1.png",
  },
  {
    title: "Intimate Studio Living Area",
    image: "/images/project-2.png",
  },
  {
    title: "Loft Apartment",
    image: "/images/project-3.png",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 md:py-32 bg-[#D7D1C8]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-16 md:mb-20"
        >
          View our projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-stone-800 text-lg md:text-xl font-light">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-800 leading-relaxed italic">
              "amé didn't just design our home – they understood us. Every detail feels effortless, like it was always meant to be."
            </p>
            <footer className="text-stone-600 text-base md:text-lg">
              — Leila & Karim A., Dubai
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
