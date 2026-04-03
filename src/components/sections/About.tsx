"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutBio, education, personal } from "@/data/portfolio";

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-2"
          >
            Background
          </motion.p>
          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white relative inline-block"
          >
            About Me
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">
              Hey, I&apos;m {personal.name} 👋
            </h3>
            {aboutBio.map((para, i) => (
              <p key={i} className="text-zinc-400 leading-relaxed">
                {para}
              </p>
            ))}
            <div className="pt-2 flex items-center gap-2 text-sm text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {personal.available
                ? "Open to full-time & freelance opportunities"
                : "Currently not available"}
            </div>
          </motion.div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-300 mb-6">
              Education
            </h3>
            {education.map((edu, i) => {
              const score = Math.round((edu.cgpa / edu.maxCgpa) * 5);
              return (
                <motion.div
                  key={i}
                  initial={reduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.12, ease: "easeOut" }}
                  className="bg-[#111] border border-white/10 rounded-2xl p-5 hover:border-indigo-500/30 transition-colors"
                >
                  {/* Top row: shortName badge + year */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                      {edu.shortName}
                    </span>
                    <span className="text-xs text-zinc-500">{edu.year}</span>
                  </div>

                  {/* Degree */}
                  <h4 className="font-semibold text-white text-sm leading-snug mb-1">
                    {edu.degree}
                  </h4>

                  {/* Full institution name */}
                  <p className="text-xs text-zinc-500 mb-3">{edu.institution}</p>

                  {/* CGPA dots */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, d) => (
                        <span
                          key={d}
                          className={`w-2.5 h-2.5 rounded-full ${
                            d < score ? "bg-indigo-500" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500">
                      CGPA: {edu.cgpa} / {edu.maxCgpa}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5">
                    {edu.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
