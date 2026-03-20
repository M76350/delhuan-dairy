import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import MilkRateSection from "@/components/MilkRateSection";
import AdComponent from "@/components/AdComponent";
import heroImage2 from "@/assets/hero-dairy-2.jpg";
import { TrendingUp, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const rateTable = [
  { type: "Cow Milk (Standard)", fat: "3.5%", snf: "8.5%", rate: "₹50/Litre" },
  { type: "Cow Milk (Premium)", fat: "4.0%+", snf: "9.0%+", rate: "₹55/Litre" },
  { type: "Buffalo Milk (Standard)", fat: "6.0%", snf: "9.0%", rate: "₹70/Litre" },
  { type: "Buffalo Milk (Premium)", fat: "7.0%+", snf: "9.5%+", rate: "₹75/Litre" },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Transparent Payouts",
    desc: "Digital slips, instant SMS updates, and zero hidden deductions for every farmer.",
  },
  {
    icon: BarChart3,
    title: "Lab-Grade Testing",
    desc: "FAT/SNF tracking plus temperature-controlled storage at source — every batch tested.",
  },
  {
    icon: Zap,
    title: "Instant Payments",
    desc: "Farmers receive payment within 24 hours of collection via digital transfer.",
  },
  {
    icon: TrendingUp,
    title: "Sudha Rate Aligned",
    desc: "Rates updated in sync with Sudha Plant Kochas guidelines and regional demand.",
  },
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
            title: "Today's Milk Rate — Kochas, Rohtas",
            subtitle: "Updated daily with Sudha guidelines and local demand",
          },
        ]}
        eyebrow="Milk Rate Today"
        supportingText="Transparent, farmer-friendly pricing with digital slips and on-time payouts at Delhuan Dairy Farm, Kochas, Bihar."
        heightClass="min-h-[70vh]"
      />

      {/* Rate Table */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-primary/15 via-background to-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.6em] text-primary mb-3 font-semibold">Current Rates</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fair Milk Pricing at Delhuan Dairy Farm
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We update our rates with Sudha guidelines and regional demand, ensuring every farmer
              in Kochas, Dinara, and Rohtas is paid on time while consumers get affordable, quality milk.
            </p>
          </div>

          {/* Rate Table */}
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-border mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-5 py-4 font-semibold">Milk Type</th>
                  <th className="text-center px-5 py-4 font-semibold">FAT %</th>
                  <th className="text-center px-5 py-4 font-semibold">SNF %</th>
                  <th className="text-right px-5 py-4 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody>
                {rateTable.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-background" : "bg-primary/5"}>
                    <td className="px-5 py-4 font-medium text-foreground">{row.type}</td>
                    <td className="px-5 py-4 text-center text-muted-foreground">{row.fat}</td>
                    <td className="px-5 py-4 text-center text-muted-foreground">{row.snf}</td>
                    <td className="px-5 py-4 text-right font-bold text-primary text-base">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-muted-foreground mb-10">
            * Rates are indicative and subject to change based on Sudha Plant Kochas guidelines.
            Contact us on WhatsApp for latest rates.
          </p>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-primary/15 bg-card p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdComponent slot="XXXXXXXXXX" className="container mx-auto px-4" />

      <MilkRateSection />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default MilkRatePage;
