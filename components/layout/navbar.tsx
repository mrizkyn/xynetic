"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#projects", label: "Work" },
  { href: "/products", label: "Product" },
  { href: "/contact", label: "Contact" },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
          scrolled || isOpen
            ? "py-3 sm:py-4 bg-white/90 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            : "py-4 sm:py-6 md:py-8 bg-transparent",
        )}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-[60] flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo-black.png"
              alt="Bivara Logo"
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-500 origin-left"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] p-2 sm:p-2.5 rounded-full border border-black/10 bg-black/5 hover:bg-black/10 transition-colors backdrop-blur-sm group"
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
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl overflow-y-auto"
          >
            {/* Background Gradients for Menu */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-8 sm:pb-12">
              <nav className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-auto mb-auto">
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
                      className="group inline-flex items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-muted-foreground hover:text-foreground transition-all duration-500"
                    >
                      <span className="mr-6 sm:mr-8 md:mr-10 text-sm sm:text-base md:text-lg font-mono tracking-widest text-primary/50 group-hover:text-primary transition-colors -mt-2 sm:-mt-4">
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
                className="mt-8 pt-8 sm:pt-10 border-t border-black/10 flex flex-col md:flex-row gap-8 sm:gap-10 md:items-center justify-between text-sm sm:text-base text-muted-foreground"
              >
                <div>
                  <h4 className="text-foreground font-semibold mb-2">
                    Contact
                  </h4>
                  <p>hello@bivara.com</p>
                  <p>+62 812 3456 7890</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">
                    Socials
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
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
