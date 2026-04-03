"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}
        >
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Brand */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg tracking-tight"
            >
              {personal.name}
            </button>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href={`mailto:${personal.email}`}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              Hire Me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className="w-full text-left py-3 text-sm text-zinc-300 hover:text-white border-b border-white/5 last:border-0 transition-colors"
                >
                  {label}
                </button>
              ))}
              <div className="pt-4">
                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
