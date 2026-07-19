import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Server, Building2, Package, ShoppingCart, Zap, FileText } from "lucide-react";

export const metadata = {
  title: "Nerakita Accounting System - Bivara",
  description: "Modern, reliable, and powerful SaaS ERP & Accounting system for your business.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 w-full overflow-hidden bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              SaaS ERP Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Nerakita <br />
              <span className="text-muted-foreground">Accounting System</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              A comprehensive, multi-tenant Software as a Service (SaaS) ERP application serving as the financial core of your business. Seamlessly integrating Accounting, Inventory, and Trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-center hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Request Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/projects/nerakita/landingpage.png" 
              alt="Nerakita Landing Page"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <hr className="border-black/5 my-12" />

      {/* Overview & Multi-Tenant Architecture */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Multi-Tenant Architecture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Built on a robust multi-tenancy foundation, Nerakita serves multiple clients (tenants) independently from a single codebase. Every client enjoys complete data isolation with their own database and dedicated subdomain.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Central Domain:</strong> Handles initial onboarding, registration, and global login. Middleware ensures strict security, redirecting authenticated users instantly to their specific tenant workspace (e.g., <em>client.nerakita.com</em>).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">Tenant Domain:</strong> The exclusive operational hub for businesses where Dashboard, Accounting, and Inventory activities take place securely.
                </div>
              </li>
            </ul>
          </div>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-black/10 bg-slate-50">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
              src="/images/projects/nerakita/dashboard.png" 
              alt="Nerakita Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="bg-slate-50 border-y border-black/5 py-24 px-4 sm:px-6 md:px-8 lg:px-12 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Core ERP Modules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured around Domain-Driven Design principles, Nerakita centralizes your operations across three primary business pillars.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* Accounting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/projects/nerakita/journal-voucher.png" alt="Journal Voucher" className="rounded-2xl shadow-md border border-black/5 w-full object-cover" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/projects/nerakita/general-ledger.png" alt="General Ledger" className="rounded-2xl shadow-md border border-black/5 w-full object-cover" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Accounting Module</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The financial core of your enterprise. Designed to manage the complete lifecycle of financial recording and tracking.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">Chart of Accounts:</strong> Organized structural mapping of corporate accounts.</li>
                  <li><strong className="text-foreground">Journal Vouchers:</strong> Precisely record debit and credit transactions, both manual entries and automated system triggers.</li>
                  <li><strong className="text-foreground">Invoicing & Payments:</strong> Create seamless billing for customers and vendors with full payment tracking.</li>
                  <li><strong className="text-foreground">Fixed Assets:</strong> Manage corporate assets alongside automated depreciation calculations.</li>
                </ul>
              </div>
            </div>

            {/* Inventory & Trade */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Inventory & Trade</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Comprehensive tracking of goods and end-to-end fulfillment cycles.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground text-lg flex items-center gap-2"><ShoppingCart className="w-5 h-5"/> Procurement & Sales</h4>
                    <p className="text-muted-foreground mt-1">Handles the entire supply chain from generating Purchase Orders for vendors to receiving items, and managing customer Sales Orders through to final Delivery.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg flex items-center gap-2"><Package className="w-5 h-5"/> Stock Movement</h4>
                    <p className="text-muted-foreground mt-1">Configure multi-warehouse layouts and monitor physical stock availability. Accurately record every item entering, exiting, or transferring between locations.</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-black/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/projects/nerakita/addons.png" alt="Add-ons Management" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">Modular add-ons allow clients to scale features based on their subscription tier.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Event-Driven Automation */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-24 max-w-7xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Zap className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Event-Driven Automation</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Say goodbye to manual double-entry. Nerakita implements a <strong>Perpetual Inventory System</strong> powered by a sophisticated event-driven architecture. Whenever a stock movement occurs in the warehouse, the system silently triggers an event that automatically posts the corresponding accounting journal. This eradicates human error and ensures balance sheets reflect real-time asset valuations.
        </p>
      </section>

      {/* Reporting & Exports */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-10">
          <FileText className="w-8 h-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Advanced Financial Reporting</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Backed by a centralized accounting service, the platform instantly generates standard management reports essential for business analysis. All reports can be exported effortlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative rounded-3xl overflow-hidden shadow-md border border-black/10 bg-slate-50 aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/projects/nerakita/profitloss.png" alt="Income Statement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white">Income Statement</h3>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden shadow-md border border-black/10 bg-slate-50 aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/projects/nerakita/neraca.png" alt="Balance Sheet" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white">Balance Sheet</h3>
            </div>
          </div>
          <div className="group relative rounded-3xl overflow-hidden shadow-md border border-black/10 bg-slate-50 aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/projects/nerakita/cash-flow.png" alt="Cash Flow" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white">Cash Flow Statement</h3>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
