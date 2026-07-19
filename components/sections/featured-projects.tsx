"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    slug: "nerakita",
    title: "Nerakita Accounting System",
    category: "SaaS Product",
    description:
      "Cloud-based accounting system with real-time reporting and automated invoicing.",
    image: "/images/projects/nerakita/landingpage.png",
    color: "from-violet-600 to-indigo-600",
    link: "/products/nerakita",
  },
  {
    id: 2,
    slug: "envipro",
    title: "Envipro Water Monitoring System",
    category: "Client Project",
    client: "PT Quantum Prima Solusi",
    description:
      "IoT-based wastewater monitoring dashboard integrated with KLHK Sparing reporting.",
    image: "/images/projects/envipro/thumbnail.jpg",
    color: "from-cyan-500 to-blue-500",
    link: "/projects/envipro",
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
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header Text - Now in normal document flow within the sticky container, positioned above cards */}
        <div className="w-full px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 flex-shrink-0 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl">
            Horizontal scroll through our flagship projects.
          </p>
        </div>

        {/* Scrolling Cards Area - Takes remaining height */}
        <div className="flex-1 flex min-h-0 pb-10 pt-4 md:pt-8">
          <motion.div
            style={{ x }}
            className="flex items-center h-full gap-4 sm:gap-6 md:gap-10 pl-4 sm:pl-[5vw] md:pl-[10vw]"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative h-full max-h-[65vh] md:max-h-[600px] w-[85vw] sm:w-[75vw] md:w-[60vw] flex-shrink-0 overflow-hidden rounded-2xl md:rounded-3xl border border-black/10 shadow-lg bg-card/20 backdrop-blur-md"
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
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                        {project.title}
                      </h3>
                      {project.client && (
                        <p className="text-white/80 text-sm sm:text-base font-medium mb-2 sm:mb-3 md:mb-4">
                          Client: {project.client}
                        </p>
                      )}
                      <p className="text-gray-300 max-w-md text-sm sm:text-base md:text-lg mb-3 sm:mb-4 md:mb-6">
                        {project.description}
                      </p>
                    </div>

                    <Link
                      href={project.link}
                      className="p-2 sm:p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group-active:scale-95"
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                    </Link>
                  </div>

                  <Link
                    href={project.link}
                    className="inline-block mt-2 sm:mt-3 md:mt-4 px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm md:text-base rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
