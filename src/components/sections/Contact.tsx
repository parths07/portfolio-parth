"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Animated gradient blob */}
      {!reduced && (
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[140px]" />
        </motion.div>
      )}

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-2"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Let&apos;s Build Something{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Together
          </span>
        </motion.h2>

        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-zinc-400 mb-10 leading-relaxed"
        >
          I&apos;m open to full-time roles and freelance projects. Whether you have
          an idea, a problem to solve, or just want to say hi — my inbox is
          always open.
        </motion.p>

        {/* Email button */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105"
          >
            <Mail size={20} />
            Send Me an Email
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <Github size={18} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <Linkedin size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
