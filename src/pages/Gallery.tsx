import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import GallerySection from "@/components/GallerySection";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import AdComponent from "@/components/AdComponent";
import heroImage1 from "@/assets/hero-dairy-1.jpg";
import { Camera, Milk, Users, Award } from "lucide-react";

const galleryStats = [
  { icon: Camera, value: "100+", label: "Farm Photos" },
  { icon: Milk, value: "12,000+", label: "Litres/Day" },
  { icon: Users, value: "500+", label: "Farmer Partners" },
  { icon: Award, value: "15+", label: "Years of Service" },
];

const GalleryPage = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main>
      <HeroSection
        id="gallery-hero"
        slides={[
          {
            image: heroImage1,
            title: "Delhuan Dairy Farm in Pictures",
            subtitle: "Barns, collection centers, labs and village deliveries in Kochas, Rohtas",
          },
        ]}
        eyebrow="Our Gallery"
        supportingText="See how milk moves from farms to chillers to your home, with farmer programs along the way in Delhuan, Kochas, and Dinara."
        heightClass="min-h-[70vh]"
      />

      {/* Intro */}
      <section className="pt-14 pb-12 bg-gradient-to-r from-primary/10 via-background to-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-primary mb-3 font-semibold">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Snapshots from Barns, Labs & Local Deliveries
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10">
            Step inside our collection centers, cold rooms, community drives, and farmer workshops
            that power the Delhuan Dairy ecosystem every single day across Rohtas district, Bihar.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {galleryStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-card rounded-2xl p-5 shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdComponent slot="XXXXXXXXXX" className="container mx-auto px-4" />

      <GallerySection />
      <CustomerTestimonials />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default GalleryPage;
