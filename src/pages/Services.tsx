import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/ServicesSection";
import AnimalMedicalSection from "@/components/AnimalMedicalSection";
import CustomerTestimonials from "@/components/CustomerTestimonials";

const ServicesPage = () => {
  const serviceHighlights = [
    { title: "Digital milk collection", description: "Automated weighing, instant receipts, and payout tracking." },
    { title: "Veterinary care", description: "On-call livestock doctors with vaccination and nutrition plans." },
    { title: "Farmer enablement", description: "Feed guidance, breeding support, and seasonal workshops." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/15 via-background to-background">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4">Our Services</p>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  End-to-end dairy solutions designed for rural growth.
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you are a farmer, distributor, or household, our services guarantee quality,
                  transparency, and speed. Explore everything from doorstep collection to medical support and
                  premium dairy supply chains.
                </p>
              </div>
              <div className="grid gap-4">
                {serviceHighlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-2xl border border-white/10 bg-card/80 p-5 shadow-primary/10 shadow-lg">
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{highlight.description}</p>
                  </div>
                ))}
              </div>
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
};

export default ServicesPage;

