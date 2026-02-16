"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  BrainCircuit,
  Code,
  Smartphone,
  Palette,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance web applications built with Next.js and React. Scalable, secure, and SEO-optimized.",
    icon: <Globe className="w-10 h-10 text-primary" />,
    className: "md:col-span-2",
  },
  {
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile solutions for iOS and Android.",
    icon: <Smartphone className="w-10 h-10 text-secondary" />,
    className: "md:col-span-1",
  },
  {
    title: "AI Solutions",
    description:
      "Integration of Machine Learning and LLMs to automate workflows and enhance decision making.",
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
    className: "md:col-span-1",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric design that blends aesthetics with functionality for superior engagement.",
    icon: <Palette className="w-10 h-10 text-primary" />,
    className: "md:col-span-2",
  },
];

export function ServicesSection() {
  return (
    <section
      id="expertise"
      className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden w-full"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="mb-10 md:mb-12 text-center max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 md:mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored for growth and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-[minmax(180px,auto)] max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-card/30 backdrop-blur-sm overflow-hidden",
                "hover:bg-card/50 transition-all duration-500",
                "hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-primary/30",
                service.className,
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="mb-4 sm:mb-5 md:mb-6 p-2.5 sm:p-3 rounded-xl md:rounded-2xl bg-white/5 w-fit group-hover:bg-primary/10 transition-colors duration-500">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
