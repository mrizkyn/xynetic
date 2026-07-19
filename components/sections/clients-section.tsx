import Image from "next/image";

const clients = [
  {
    name: "PT Quantum Prima Solusi",
    logo: "/images/client/quantum.jpeg",
  },
];

export function ClientsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden w-full border-t border-black/5" id="clients">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Trusted By
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Clients
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center gap-4 group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 bg-white flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <p className="text-sm sm:text-base font-semibold text-foreground text-center">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
