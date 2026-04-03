"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-2"
          >
            Career
          </motion.p>
          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white relative inline-block"
          >
            Experience
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-[11px] top-5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />

                {/* Card */}
                <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 border-l-2 border-l-indigo-500/60 hover:border-indigo-500/40 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {exp.current && (
                        <span className="px-2.5 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                          Present
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs">
                        {exp.type}
                      </span>
                      <span className="text-sm text-zinc-500">{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.points.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-indigo-500 mt-[3px] flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
