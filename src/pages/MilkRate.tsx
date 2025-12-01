import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import MilkRateSection from "@/components/MilkRateSection";
import heroImage2 from "@/assets/hero-dairy-2.jpg";

const assurancePillars = [
  { title: "Transparent payouts", detail: "Digital slips, instant SMS updates, and zero hidden deductions." },
  { title: "Lab-grade testing", detail: "Fat/SNF tracking plus temperature-controlled storage at source." },
  { title: "Logistics certainty", detail: "Dedicated chillers, insulated vans, and daily delivery slots." }
];

const MilkRatePage = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main>
      <HeroSection
        id="milk-rate-hero"
        slides={[
          {
            image: heroImage2,
            title: "Latest milk rates for Delhuan & nearby blocks",
            subtitle: "Updated with Sudha guidelines and local demand",
          },
        ]}
        eyebrow="Milk Rate"
        supportingText="Transparent, farmer-friendly pricing with digital slips and on-time payouts."
        heightClass="min-h-[70vh]"
      />

      <section className="pt-10 pb-16 bg-gradient-to-b from-primary/15 via-background to-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4">Latest Milk Rates</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fair pricing that rewards honest farming.</h1>
          <p className="text-muted-foreground text-lg">
            We update our rates with Sudha guidelines and regional demand, ensuring every farmer is paid on time
            while consumers continue to receive affordable, quality milk.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10 grid gap-6 md:grid-cols-3">
          {assurancePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-card/85 p-6 text-left shadow-lg shadow-primary/10">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <MilkRateSection />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default MilkRatePage;

