import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import GallerySection from "@/components/GallerySection";
import LoyalCustomers from "@/components/LoyalCustomers";
import heroImage1 from "@/assets/hero-dairy-1.jpg";

const GalleryPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection
        id="gallery-hero"
        slides={[
          {
            image: heroImage1,
            title: "Delhuan Dairy in pictures",
            subtitle: "Barns, collection centers, labs and village deliveries",
          },
        ]}
        eyebrow="Gallery"
        supportingText="See how milk moves from farms to chillers to your home, with farmer programs along the way."
        heightClass="min-h-[70vh]"
      />

      <section className="pt-10 pb-16 bg-gradient-to-r from-primary/10 via-background to-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Snapshots from barns, labs, and local deliveries.</h1>
          <p className="text-muted-foreground text-lg">
            Step inside our collection centers, cold rooms, community drives, and farmer workshops that power the
            Delhuan Dairy ecosystem every single day.
          </p>
        </div>
      </section>

      <GallerySection />
      <LoyalCustomers />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default GalleryPage;

