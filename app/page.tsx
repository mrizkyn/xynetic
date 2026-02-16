import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStackSection } from "@/components/sections/tech-stack";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <TechStackSection />
      <ServicesSection />
      <FeaturedProjects />
      <CtaSection />
      <ContactSection />
    </main>
  );
}
