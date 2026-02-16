"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code2, Rocket, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-20">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] bg-secondary/20 rounded-full blur-[120px] md:blur-[180px]"
        />

        {/* Moving Grid Effect (Simplified for CSS/Motion) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-muted/50 border border-primary/20 text-xs sm:text-sm font-medium text-primary shadow-[0_0_15px_rgba(6,182,212,0.1)] backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Future-Ready Software Solutions
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-foreground leading-[1.1]">
              Elevating <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
                Digital Reality
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4">
              We craft high-end web applications and enterprise systems that
              merge
              <span className="text-foreground font-medium">
                {" "}
                aesthetic perfection
              </span>{" "}
              with
              <span className="text-foreground font-medium">
                {" "}
                powerful engineering
              </span>
              .
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 md:pt-8"
          >
            <Link
              href="/contact"
              className={cn(
                "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 sm:px-8 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]",
              )}
            >
              <span className="mr-2">Let's Talk</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shine" />
            </Link>

            <Link
              href="/services"
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-full w-full sm:w-auto",
                "bg-transparent border border-muted-foreground/30 text-foreground font-medium text-sm sm:text-base",
                "transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary",
              )}
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Abstract Floating Elements (Visual Interest) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute top-1/2 left-10 -translate-y-1/2 hidden xl:block"
        >
          {/* Decorative Code Block or Graphic */}
          <div className="p-4 rounded-xl border border-white/5 bg-black/40 backdrop-blur-sm -rotate-6">
            <Code2 className="w-8 h-8 text-secondary/50" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 2 }}
          className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block"
        >
          <div className="p-4 rounded-xl border border-white/5 bg-black/40 backdrop-blur-sm rotate-12">
            <Zap className="w-8 h-8 text-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
