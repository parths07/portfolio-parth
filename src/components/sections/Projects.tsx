"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const reduced = useReducedMotion();

  const featured = new Set(["AI Quiz Generator", "MediAssist"]);

  return (
    <section id="projects" className="py-24 px-6">
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
            Work
          </motion.p>
          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white relative inline-block"
          >
            Projects
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={reduced ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={reduced ? {} : { y: -4 }}
              className="group relative bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col gap-4
                         hover:border-indigo-500/40 transition-all duration-300
                         hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Featured badge */}
              {featured.has(project.title) && (
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                  Featured
                </span>
              )}

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 pr-20">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
