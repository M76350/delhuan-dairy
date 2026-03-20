import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";
import AnimalMedicalSection from "@/components/AnimalMedicalSection";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import AdComponent from "@/components/AdComponent";
import heroImage2 from "@/assets/hero-dairy-2.jpg";
import heroImage3 from "@/assets/hero-dairy-3.jpg";
import { Milk, Stethoscope, Wheat, Truck, BarChart3, Phone } from "lucide-react";

const services = [
  {
    icon: Milk,
    title: "Digital Milk Collection",
    desc: "Automated weighing, FAT/SNF testing, instant digital receipts, and transparent payout tracking for every farmer. No manual errors, no delays.",
    tag: "Core Service",
  },
  {
    icon: Stethoscope,
    title: "Veterinary & Animal Care",
    desc: "On-call livestock doctors for treatment, vaccination drives, deworming, and nutrition planning. Emergency vet support available 7 days a week.",
    tag: "Animal Health",
  },
  {
    icon: Wheat,
    title: "Sudha Dana & Feed Supply",
    desc: "High-nutrition Sudha Dana cattle feed and calcium mineral mix available at the dairy center. Bulk orders and per-kg purchase both available.",
    tag: "Feed & Nutrition",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Fresh milk, ghee, curd, and dairy products delivered to your doorstep in Kochas, Dinara, and nearby villages every morning before 9 AM.",
    tag: "Delivery",
  },
  {
    icon: BarChart3,
    title: "Farmer Support Programs",
    desc: "Seasonal workshops, breeding guidance, semen processing, and financial literacy programs to help dairy farmers grow their income.",
    tag: "Farmer Enablement",
  },
  {
    icon: Phone,
    title: "24/7 WhatsApp Support",
    desc: "Order products, report animal emergencies, check milk rates, or get delivery updates — all via WhatsApp at +91-7635065908.",
    tag: "Support",
  },
];

const ServicesPage = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main>
      <HeroSection
        id="services-hero"
        slides={[
          {
            image: heroImage2,
            title: "End-to-End Dairy Services in Rohtas",
            subtitle: "Milk collection, animal care, feed supply & home delivery",
          },
          {
            image: heroImage3,
            title: "Animal Medical Care in Kochas",
            subtitle: "On-call vets, vaccination drives and nutrition planning",
          },
        ]}
        eyebrow="Our Services"
        supportingText="Designed for farmers, distributors, and households in Kochas, Dinara, and Rohtas district to keep milk quality high and animal health strong."
        heightClass="min-h-[70vh]"
      />

      {/* Intro */}
      <section className="pt-14 pb-16 bg-gradient-to-br from-primary/15 via-background to-background">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4 font-semibold">Our Services</p>
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                End-to-end dairy solutions for rural growth in Bihar.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Whether you are a farmer in Delhuan, a household in Kochas, or a business in Dinara,
                our services guarantee quality, transparency, and speed. From doorstep milk collection
                to veterinary support and premium dairy supply — we cover it all.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Connected to Sudha Plant Kochas (Head Center Ara, Bihar), we follow strict quality
                protocols and digital systems to ensure every farmer gets fair pay and every customer
                gets pure milk.
              </p>
            </div>
            <div className="grid gap-4">
              {services.slice(0, 3).map((s) => (
                <div key={s.title} className="rounded-2xl border border-primary/15 bg-card p-5 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-accent-dark font-semibold uppercase tracking-wider">{s.tag}</span>
                      <h3 className="text-lg font-semibold mt-0.5">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdComponent slot="XXXXXXXXXX" className="container mx-auto px-4" />

      {/* All Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">All Services at a Glance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From milk collection to animal healthcare — everything under one roof at Delhuan Dairy Farm.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-accent-dark font-semibold uppercase tracking-wider">{s.tag}</span>
                <h3 className="text-lg font-semibold text-primary mt-1 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
      <AnimalMedicalSection />
      <CustomerTestimonials />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default ServicesPage;
