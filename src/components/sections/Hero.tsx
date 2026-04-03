"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { personal } from "@/data/portfolio";

const roles = [
  "Full Stack Engineer",
  "API Architect",
  "AI Agent Builder",
  "Backend Specialist",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Gradient orbs */}
      {!reduced && (
        <>
          <div className="absolute top-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">

        {/* Avatar */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.05 }}
          className="relative"
        >
          <div className="w-[104px] h-[104px] rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-[#0a0a0a] shadow-lg shadow-indigo-500/20">
            <Image
              src="/avatar.jpg"
              alt={personal.name}
              width={100}
              height={100}
              className="rounded-full object-cover w-full h-full border-2 border-white/20"
              priority
            />
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div {...(reduced ? {} : fadeUp(0.1))}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...(reduced ? {} : fadeUp(0.2))}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          Hi, I&apos;m {personal.name} 👋
        </motion.h1>

        {/* Animated role */}
        <motion.div
          {...(reduced ? {} : fadeUp(0.3))}
          className="h-12 flex items-center justify-center"
        >
          <span className="text-2xl sm:text-3xl font-semibold text-zinc-400 mr-2">
            I&apos;m{" "}
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={reduced ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Experience badge */}
        <motion.div {...(reduced ? {} : fadeUp(0.38))}>
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="font-bold text-white">3+</span>
            <span className="text-zinc-400">Years of Experience</span>
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          {...(reduced ? {} : fadeUp(0.45))}
          className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
        >
          Building scalable softwares, backends, AI-powered systems, and shipping products
          people love - from India 🇮🇳
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...(reduced ? {} : fadeUp(0.55))}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            View My Work
            <ArrowDown size={16} />
          </button>
          <a
            href="/Parth_Soni_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 font-medium transition-all duration-200"
          >
            Download Resume
            <Download size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-1 text-zinc-600"
      >
        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
