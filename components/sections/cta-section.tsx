"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-background border-t border-white/5 w-full">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] sm:w-[700px] sm:h-[450px] md:w-[800px] md:h-[500px] bg-primary/10 rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8">
            Ready to build the <br />
            <span className="text-primary">Feature?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
            Join forces with Xynetik to transform your ambitious ideas into
            reality.
          </p>

          <Link
            href="#contact"
            className={cn(
              "group inline-flex items-center justify-center gap-2 sm:gap-3 px-7 py-4 sm:px-9 sm:py-5 md:px-10 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-bold",
              "bg-white text-black hover:bg-primary hover:text-white transition-all duration-300",
              "shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)]",
            )}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
