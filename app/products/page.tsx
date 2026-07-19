import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Products - Bivara",
  description: "Explore our suite of enterprise-grade software products.",
};

const products = [
  {
    slug: "nerakita",
    title: "Nerakita Accounting System",
    category: "Finance & Accounting",
    description: "Our flagship cloud-based accounting software designed to simplify financial management, automated invoicing, and real-time reporting for modern businesses.",
    image: "/images/projects/nerakita/dashboard.png",
    color: "from-violet-600 to-indigo-600",
  },
  // Future products can be added here
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Our Products
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Software built for <br />
            <span className="text-muted-foreground">modern business</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of powerful, intuitive, and reliable software products designed to help your enterprise scale efficiently.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((product) => (
            <div 
              key={product.slug}
              className="group relative bg-white rounded-3xl overflow-hidden border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-primary text-sm font-bold tracking-wider uppercase mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {product.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>
                
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
                >
                  Explore Product <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}
