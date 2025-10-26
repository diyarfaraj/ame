"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#D7D1C8] px-6 md:px-12 py-20 md:py-28 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <p className="text-stone-700 text-sm md:text-base mb-12 md:mb-16 max-w-2xl">
            Our team is bursting with creativity. Whatever the scale of your project, we'd love to help your space realise its true potential.
          </p>

          {/* Form Container */}
          <div className="bg-[#F5F3F0] p-8 md:p-12 lg:p-16">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-stone-600 text-sm mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-stone-400 transition-colors"
                />
              </div>

              {/* Email and Contact Number Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-stone-600 text-sm mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-stone-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-stone-600 text-sm mb-2">
                    Contact Number*
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    placeholder="Your contact number"
                    className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-stone-400 transition-colors"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-stone-600 text-sm mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us your message here..."
                  className="w-full px-4 py-3 bg-white border border-stone-200 text-stone-800 text-sm focus:outline-none focus:border-stone-400 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 text-sm font-light uppercase tracking-wider hover:bg-stone-800 transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
