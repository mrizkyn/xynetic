"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  Phone,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden w-full"
      id="contact"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary mb-4 sm:mb-5 md:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
              Let's Build Something <br />
              <span className="text-primary">Extraordinary</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 max-w-lg">
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Email us at
                  </p>
                  <a
                    href="mailto:hello@xynetik.com"
                    className="text-lg sm:text-xl font-medium text-white group-hover:text-primary transition-colors"
                  >
                    hello@xynetik.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all duration-300">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-green-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Chat on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    className="text-lg sm:text-xl font-medium text-white group-hover:text-green-500 transition-colors"
                  >
                    +62 812 3456 7890
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 sm:py-16 md:py-20"
              >
                <div className="inline-flex p-3 sm:p-4 rounded-full bg-green-500/20 mb-4 sm:mb-5 md:mb-6">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We'll be in touch with you shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 sm:mt-8 text-sm sm:text-base text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 sm:space-y-7 md:space-y-8"
              >
                <div className="space-y-5 sm:space-y-6">
                  <FloatingInput
                    id="name"
                    label="Your Name"
                    type="text"
                    required
                  />
                  <FloatingInput
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <FloatingInput
                      id="project"
                      label="Project Type"
                      type="text"
                    />
                    <FloatingInput
                      id="budget"
                      label="Budget (USD)"
                      type="text"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="peer block w-full appearance-none border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-base sm:text-lg text-white focus:border-primary focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm sm:text-base text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                    >
                      Tell us about your project
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    "w-full py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300",
                    loading
                      ? "bg-muted cursor-not-allowed text-muted-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
                  )}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        required={required}
        className="peer block w-full appearance-none border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-base sm:text-lg text-white focus:border-primary focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm sm:text-base text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
