"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "GraphQL",
];

// Placeholder logos - in a real app, these would be SVG imports or Next.js Images
// Using text for now to demonstrate the effect as requested
const TechLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 mx-2 sm:mx-3 md:mx-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-300 cursor-default group">
    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-muted-foreground group-hover:text-white transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

export function TechStackSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden w-full">
      <div className="text-center mb-8 md:mb-10 px-4">
        <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Powered By Modern Tech
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {technologies.map((tech, index) => (
            <TechLogo key={index} name={tech} />
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {technologies.map((tech, index) => (
            <TechLogo key={`duplicate-${index}`} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
