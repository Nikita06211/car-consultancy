"use client";
import React from "react";
import HeroHighlight from "./HeroHighlight";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="hero-bg w-full flex flex-col justify-center items-center py-20 px-4 min-h-[45vh]"
      style={{ position: "relative" }}
    >
      <motion.h1
        className="hero-title text-center mb-4 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Expert Automotive <br /> Consulting Services
      </motion.h1>

      <motion.p
        className="hero-subtext text-center max-w-2xl mb-8 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Get professional insights on premium vehicles. Expert analysis, market
        evaluations, and personalized recommendations.
      </motion.p>

      <motion.div
        className="flex gap-4 justify-center mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <HeroHighlight number="1" label="Vehicles Analyzed" />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <HeroHighlight number="2" label="Expert Reviews" />
        </motion.div>
      </motion.div>

      <motion.button
        className="cta-btn shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Consultation
      </motion.button>
    </section>
  );
}
