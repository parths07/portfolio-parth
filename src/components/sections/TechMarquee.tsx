"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techStack } from "@/data/portfolio";

// Split by even/odd index so items are naturally interleaved across both rows.
// Doubling each half gives the seamless infinite-scroll effect.
const row1Base = techStack.filter((_, i) => i % 2 === 0);
const row2Base = techStack.filter((_, i) => i % 2 === 1);
const row1 = [...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base];

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-sm text-zinc-300 whitespace-nowrap hover:border-indigo-500/50 hover:text-white transition-all duration-200 cursor-default">
      {label}
    </span>
  );
}

export default function TechMarquee() {
  const reduced = useReducedMotion();

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-2"
        >
          Toolkit
        </motion.p>
        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Tech I Work With
        </motion.h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        <div className="overflow-hidden">
          <div className={`flex gap-3 w-max ${reduced ? "" : "animate-marquee-left"}`}>
            {row1.map((tech, i) => (
              <Pill key={`r1-${i}`} label={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        <div className="overflow-hidden">
          <div className={`flex gap-3 w-max ${reduced ? "" : "animate-marquee-right"}`}>
            {row2.map((tech, i) => (
              <Pill key={`r2-${i}`} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
