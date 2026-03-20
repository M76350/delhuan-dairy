import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSection from "@/components/AboutSection";
import LeadershipTeam from "@/components/LeadershipTeam";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import AdComponent from "@/components/AdComponent";
import heroImage1 from "@/assets/hero-dairy-1.jpg";
import heroImage2 from "@/assets/hero-dairy-2.jpg";
import { Milk, Users, MapPin, Award, Leaf, Heart } from "lucide-react";

const highlights = [
  { label: "Years Serving Rural Bihar", value: "15+", icon: Award },
  { label: "Daily Litres Collected", value: "12,000+", icon: Milk },
  { label: "Partner Villages", value: "40+", icon: MapPin },
  { label: "Happy Farmer Families", value: "500+", icon: Users },
];

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No artificial additives, preservatives, or hormones. Pure milk straight from healthy cows and buffaloes.",
  },
  {
    icon: Heart,
    title: "Farmer First",
    desc: "Fair pricing, transparent digital payouts, and on-time payments to every farmer partner.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    desc: "FAT/SNF testing, cold-chain logistics, and Sudha Plant Kochas network compliance.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Veterinary camps, farmer workshops, and animal care programs across Rohtas district.",
  },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main>
      <HeroSection
        id="about-hero"
        slides={[
          {
            image: heroImage1,
            title: "About Delhuan Dairy Farm",
            subtitle: "From Delhuan village to homes across Rohtas & Bihar",
          },
          {
            image: heroImage2,
            title: "Farmer-First Dairy Model",
            subtitle: "Transparent collection, fair payouts, and strong animal care",
          },
        ]}
        eyebrow="About Us"
        supportingText="15+ years of serving rural Bihar with honest pricing, quality testing, and community-focused dairy services near Kochas, Dinara, Rohtas."
        heightClass="min-h-[70vh]"
      />

      {/* Intro Section */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4 font-semibold">
            About Delhuan Dairy
          </p>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Building trust with every litre of farm-fresh milk in Kochas, Rohtas.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Delhuan Dairy Farm is a community-first dairy cooperative based in Delhuan village,
                Dinara Thana, Rohtas district, Bihar. We collect fresh cow and buffalo milk directly
                from local farmers, process it with strict hygiene standards, and supply it to homes
                and businesses across Kochas, Dinara, and nearby areas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Connected to the Sudha Plant Kochas network (Head Center Ara, Bihar), we ensure
                every litre meets quality benchmarks for FAT, SNF, and temperature. Our digital
                milk collection system gives farmers real-time receipts and transparent payouts.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  Farmer success programs and fair pricing initiatives
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  Field veterinarians, feed partners, and doorstep logistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  Digital tracking for quality, temperature, and payouts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  Serving Delhuan, Kochas, Dinara, and 40+ villages in Rohtas
                </li>
              </ul>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ label, value, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-primary/20 p-6 bg-card shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary">{value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdComponent slot="XXXXXXXXXX" className="container mx-auto px-4" />

      {/* Values */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do at Delhuan Dairy is guided by purity, fairness, and community growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <LeadershipTeam />
      <CustomerTestimonials />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default AboutPage;
