import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background pt-16 sm:pt-24 md:pt-32 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-black/5 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1400px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-16 sm:mb-24">
          <div className="max-w-xs">
            <h3 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
              Engineering the Unimagined
            </h3>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16 md:gap-24">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="#expertise"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Work
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="https://instagram.com/bivara.labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>

        {/* Massive Text Section */}
        <div className="w-full flex items-center justify-center mb-16 sm:mb-24">
          <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] font-bold text-foreground tracking-tighter leading-none select-none text-center">
            Bivara Labs
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-black/10">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo-black.png"
              alt="Bivara Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Bivara
            </Link>
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
