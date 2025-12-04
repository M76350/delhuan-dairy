import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import ContactSection from "@/components/ContactSection";
import heroImage3 from "@/assets/hero-dairy-3.jpg";

const contactChannels = [
  {
    title: "Visit our center",
    detail: "Delhuan, Dinara Road, Rohtas (802213)",
    cta: "Open 6 AM – 8 PM every day"
  },
  {
    title: "Call & WhatsApp",
    detail: "+91 76350 65908",
    cta: "Support for orders, logistics, and farming queries"
  },
  {
    title: "Business enquiries",
    detail: "info@delhuandairy.com",
    cta: "Bulk supply, partnerships, and franchise discussions"
  }
];

const ContactPage = () => (
  <div className="min-h-screen bg-background ">
    <Header />
    <main>
      <HeroSection
        id="contact-hero"
        slides={[
          {
            image: heroImage3,
            title: "Talk to Delhuan Dairy team",
            subtitle: "For orders, partnerships or animal care support",
          },
        ]}
        eyebrow="Contact"
        supportingText="We respond quickly on phone, WhatsApp and email for all your dairy and animal-care queries."
        heightClass="min-h-[70vh]"
      />

      <section className="pt-10 pb-16 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">let's connect with delhuan dairy farm</h1>
          <p className="text-muted-foreground text-lg">
            Reach out for wholesale supply, animal care, collection-center support, or community programs. Our
            coordinators are available on phone, WhatsApp, and email throughout the week.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10 grid gap-6 md:grid-cols-3">
          {contactChannels.map((channel) => (
            <div key={channel.title} className="rounded-2xl border border-white/10 bg-card/90 p-6 text-left shadow-lg shadow-primary/10">
              <h3 className="text-xl font-semibold">{channel.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{channel.detail}</p>
              <p className="text-xs uppercase tracking-widest text-primary mt-4">{channel.cta}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default ContactPage;

