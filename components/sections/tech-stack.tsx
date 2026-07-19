"use client";

import { motion } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiGraphql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { ElementType } from "react";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "AWS", icon: FaAws },
  { name: "Docker", icon: SiDocker },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "GraphQL", icon: SiGraphql },
];

const TechLogo = ({ name, Icon }: { name: string; Icon: ElementType }) => (
  <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 mx-2 sm:mx-3 md:mx-4 rounded-xl border border-black/5 bg-black/5 backdrop-blur-sm grayscale hover:grayscale-0 hover:bg-black/10 transition-all duration-300 cursor-default group">
    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-muted-foreground group-hover:text-primary transition-colors" />
    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

export function TechStackSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-y border-black/5 bg-slate-50/50 backdrop-blur-sm overflow-hidden w-full">
      <div className="text-center mb-8 md:mb-10 px-4">
        <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest">
          OUR TECH STACK
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {technologies.map((tech, index) => (
            <TechLogo key={index} name={tech.name} Icon={tech.icon} />
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {technologies.map((tech, index) => (
            <TechLogo key={`duplicate-${index}`} name={tech.name} Icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
