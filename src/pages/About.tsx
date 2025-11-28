import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSection from "@/components/AboutSection";
import LeadershipTeam from "@/components/LeadershipTeam";
import LoyalCustomers from "@/components/LoyalCustomers";
import CustomerTestimonials from "@/components/CustomerTestimonials";

const AboutPage = () => {
  const highlights = [
    { label: "Years serving rural Bihar", value: "15+" },
    { label: "Daily litres collected", value: "12k" },
    { label: "Partner villages", value: "40+" },
    { label: "Veterinary interventions", value: "500+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4">About Delhuan Dairy</p>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Building trust with every litre of farm-fresh milk.
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  From Delhuan village to homes across Kochas, Dinara, and Rohtas, we have grown into a
                  community-first dairy partner. Our teams collect milk directly from farmers, deliver
                  transparent payouts, and invest in animal care so that every customer enjoys pure,
                  nutritious dairy.
                </p>
                <div className="space-y-3 text-muted-foreground">
                  <p>• Farmer success programs and fair pricing initiatives.</p>
                  <p>• Field veterinarians, feed partners, and doorstep logistics.</p>
                  <p>• Digital tracking for quality, temperature, and payouts.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-primary/20 p-6 bg-card/80 shadow-lg shadow-primary/10"
                  >
                    <p className="text-3xl font-bold text-primary">{item.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <LeadershipTeam />
        <LoyalCustomers />
        <CustomerTestimonials />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;

