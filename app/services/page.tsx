import { ServicesSection } from "@/components/sections/services-section";

export const metadata = {
  title: "Our Services - Bivara",
  description: "Comprehensive digital solutions tailored for growth and innovation.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 w-full flex flex-col items-center justify-center">
      <div className="w-full">
        <ServicesSection />
      </div>
    </main>
  );
}
