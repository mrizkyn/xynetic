"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Neon Nexus",
    category: "DeFi Platform",
    description:
      "A decentralized finance dashboard with real-time analytics and gas-less transactions.",
    image: "/images/projects/neon-nexus.png",
    color: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    title: "AeroStream",
    category: "SaaS Application",
    description:
      "Cloud-native project management tool for remote engineering teams.",
    image: "/images/projects/aerostream.png",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "CyberPulse",
    category: "AI Health Tech",
    description: "Diagnostic AI interface for rapid medical imaging analysis.",
    image: "/images/projects/cyberpulse.png",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    title: "Void Commerce",
    category: "E-Commerce",
    description: "Headless commerce solution with 3D product visualization.",
    image: "/images/projects/void-commerce.png",
    color: "from-fuchsia-600 to-pink-600",
  },
];

export function FeaturedProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative h-[300vh] bg-background w-full"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-6 sm:top-8 md:top-10 left-4 sm:left-6 md:left-10 z-10 max-w-xs sm:max-w-sm md:max-w-md px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Horizontal scroll through our flagship projects.
          </p>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-4 sm:gap-6 md:gap-10 pl-4 sm:pl-[10vw] md:pl-[20vw]"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[60vh] w-[85vw] sm:h-[65vh] sm:w-[75vw] md:h-[70vh] md:w-[60vw] flex-shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-card/20 backdrop-blur-md"
            >
              {/* Project Image */}
              <div className="absolute inset-0 relative w-full h-full">
                {/* Fallback gradient if image fails or while loading */}
                <div
                  className={cn(
                    "absolute inset-0 z-0 opacity-50",
                    `bg-gradient-to-br ${project.color}`,
                  )}
                />

                {/* We use specific image paths here.*/}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-20" />

              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-12 w-full bg-gradient-to-t from-black/90 to-transparent z-30">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase mb-1 sm:mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 max-w-md text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6">
                      {project.description}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="p-2 sm:p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group-active:scale-95"
                  >
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </Link>
                </div>

                <button className="mt-2 sm:mt-3 md:mt-4 px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
