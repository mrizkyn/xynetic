import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "Contact Us - Bivara",
  description: "Get in touch with Bivara for your next extraordinary project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 w-full flex flex-col items-center justify-center">
      <div className="w-full">
        <ContactSection />
      </div>
    </main>
  );
}
