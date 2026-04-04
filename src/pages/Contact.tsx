import React from "react";

import HeroSection from "@/components/HeroSection";



import ContactSection from "@/components/ContactSection";
import AdComponent from "@/components/AdComponent";
import heroImage3 from "@/assets/hero-dairy-3.jpg";
import { MapPin, Phone, Mail, MessageCircle, Clock, Truck } from "lucide-react";

const contactChannels = [
  {
    icon: MapPin,
    title: "Visit Our Dairy Center",
    detail: "Delhuan Village, Dinara Thana, Rohtas, Bihar â€“ 821307",
    cta: "Near Kochas, Dinara Road",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Call & WhatsApp",
    detail: "+91-7635065908",
    cta: "Available 6 AM â€“ 8 PM, 7 days",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    link: "tel:+917635065908",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "delhuandairy@gmail.com",
    cta: "Bulk orders, partnerships, franchise",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    link: "mailto:delhuandairy@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Order",
    detail: "Chat on WhatsApp",
    cta: "Fastest way to place an order",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    link: "https://wa.me/917635065908",
    newTab: true,
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Monday â€“ Sunday",
    cta: "6:00 AM to 8:00 PM",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Truck,
    title: "Delivery Areas",
    detail: "Kochas, Dinara, Delhuan & nearby",
    cta: "Free delivery above â‚¹500",
    color: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-600",
  },
];

const ContactPage = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    
    <main>
      <HeroSection
        id="contact-hero"
        slides={[
          {
            image: heroImage3,
            title: "Contact Delhuan Dairy Farm",
            subtitle: "Call, WhatsApp, or visit us in Kochas, Rohtas, Bihar",
          },
        ]}
        eyebrow="Contact Us"
        supportingText="We respond quickly on phone, WhatsApp, and email for all your dairy and animal-care queries in Kochas, Dinara, and Rohtas."
        heightClass="min-h-[70vh]"
      />

      {/* Contact Info Section */}
      <section className="pt-14 pb-16 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.6em] text-primary mb-3 font-semibold">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect â€” Delhuan Dairy Farm
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reach out for wholesale milk supply, animal care, collection-center support, or
              subscription orders. Our team is available every day across Kochas and Dinara.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactChannels.map((ch) => (
              <div key={ch.title} className={`rounded-2xl border p-5 ${ch.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <ch.icon className={`w-5 h-5 ${ch.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{ch.title}</h3>
                    {ch.link ? (
                      <a href={ch.link} target={ch.newTab ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-sm text-primary font-medium hover:underline mt-0.5 block">
                        {ch.detail}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground/80 mt-0.5">{ch.detail}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">{ch.cta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdComponent slot="XXXXXXXXXX" className="container mx-auto px-4" />

      {/* Map Embed Placeholder */}

      <ContactSection />
    </main>
    
    
    
  </div>
);

export default ContactPage;
