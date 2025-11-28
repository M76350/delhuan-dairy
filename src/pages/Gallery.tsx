import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import GallerySection from "@/components/GallerySection";
import LoyalCustomers from "@/components/LoyalCustomers";

const GalleryPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 via-background to-background">
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

