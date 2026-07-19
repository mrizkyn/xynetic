import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data since we don't have a database yet
const projectDetails: Record<string, any> = {
  nerakita: {
    title: "Nerakita Accounting System",
    category: "SaaS Product",
    client: "Bivara Internal",
    year: "2026",
    description: "Nerakita is our flagship SaaS product designed to simplify accounting for small to medium enterprises. It provides real-time financial reporting, automated invoicing, and intelligent expense tracking in one intuitive dashboard.",
    image: "/images/projects/neon-nexus.png",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "/products/nerakita", // Points to the product page instead of an external site
    content: []
  },
  envipro: {
    title: "Envipro Water Monitoring System",
    category: "Client Project",
    client: "PT Quantum Prima Solusi",
    year: "2026",
    description: "A comprehensive web-based wastewater quality monitoring application integrated directly with IoT data loggers in the field and connected to the KLHK (Ministry of Environment and Forestry) Sparing reporting system.",
    image: "/images/projects/envipro/thumbnail.jpg",
    technologies: ["React", "TypeScript", "AWS IoT", "GraphQL", "Framer Motion"],
    link: "https://sparingenvipro.com",
    content: [
      {
        title: "Dashboard & Overview",
        description: "A secure, isolated dashboard presenting total active devices, online/offline connectivity status, and a quick summary of the company's devices. This command center ensures that operators have immediate oversight of their entire monitoring infrastructure at a glance.",
        image: "/images/projects/envipro/dashboard.png"
      },
      {
        title: "Sensor Data Logging",
        description: "Continuous recording of periodic wastewater metrics including pH, COD, TSS, NH3N, and Flow Rate at precise 2-minute intervals. The system supports advanced date filtering and allows for one-click export of data logs to Excel or CSV formats for administrative and compliance purposes.",
        image: "/images/projects/envipro/sensor-log.png"
      },
      {
        title: "Analytics Graphics",
        description: "Interactive historical data visualization showcasing trends of environmental parameters over time. These analytics empower operators to easily identify anomalies, observe patterns, and make data-driven decisions regarding water condition changes.",
        image: "/images/projects/envipro/graphic.png"
      },
      {
        title: "KLHK Integration & Dispatch",
        description: "Automated and seamless synchronization with the Ministry of Environment and Forestry (KLHK) server. The module includes comprehensive response tracking, trace logs, and a 'Request Dispatch' mechanism enabling technicians to easily resync failed data transmissions, ensuring 100% regulatory compliance.",
        image: "/images/projects/envipro/klhk-log.png"
      }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectDetails[slug];
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} - Bivara Case Study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-black/10 shadow-lg mb-8 bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-4">About the Project</h3>
              <p className="leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Render dynamic content blocks if they exist */}
            {project.content && project.content.length > 0 && (
              <div className="space-y-16">
                {project.content.map((item: any, index: number) => (
                  <div key={index} className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">
                        {index + 1}
                      </div>
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-slate-50">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-slate-50 border border-black/5 rounded-3xl p-8 sticky top-32">
              <h3 className="text-xl font-bold text-foreground mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-semibold text-foreground">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <p className="font-semibold text-foreground">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year</p>
                  <p className="font-semibold text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-white border border-black/10 rounded-full text-xs font-medium text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-black/10" />
              
              <Link 
                href={project.link}
                className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
