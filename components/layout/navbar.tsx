"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#expertise", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants: Variants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom bezier
      },
    },
    open: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isOpen
            ? "py-3 sm:py-4 bg-black/80 backdrop-blur-lg border-b border-white/10"
            : "py-4 sm:py-5 md:py-6 bg-transparent",
        )}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-[60]">
            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
              XYNETIK
              <span className="text-primary">.</span>
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] p-2 sm:p-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm group"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center"
          >
            {/* Background Gradients for Menu */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
              <nav className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group inline-flex items-center gap-3 sm:gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-muted-foreground hover:from-white hover:to-white transition-all duration-500"
                    >
                      <span className="text-sm sm:text-base md:text-lg font-mono text-primary/50 group-hover:text-primary transition-colors">
                        0{i + 1}
                      </span>
                      {link.label}
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-white/10 flex flex-col md:flex-row gap-8 sm:gap-10 md:items-center justify-between text-sm sm:text-base text-muted-foreground"
              >
                <div>
                  <h4 className="text-white font-semibold mb-2">Contact</h4>
                  <p>hello@xynetik.com</p>
                  <p>+62 812 3456 7890</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Socials</h4>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
