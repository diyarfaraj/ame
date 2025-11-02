"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { title: "Wet Room", image: "/images/project-1.png" },
  { title: "Intimate Studio Living Area", image: "/images/project-2.png" },
  { title: "Loft Apartment", image: "/images/project-3.png" },
  { title: "Office Studio", image: "/images/project-4.png" },
  { title: "Open Plan Living", image: "/images/project-5.png" },
  { title: "Deluxe Apartment", image: "/images/project-6.png" },
  { title: "En Suite Bathroom", image: "/images/project-7.png" },
  { title: "Duplex Apartment", image: "/images/project-8.png" },
  { title: "Home Styling", image: "/images/project-9.png" },
];

export default function ProjectsGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 text-center mb-16 md:mb-20"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
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
              <h3 className="font-heading text-stone-800 text-base md:text-lg font-normal">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
