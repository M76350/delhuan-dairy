import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import ProductsSection from "@/components/ProductsSection";
import MilkRateSection from "@/components/MilkRateSection";
import SubscriptionCard from "@/components/SubscriptionCard";
import AdComponent from "@/components/AdComponent";
import { ShoppingCart, Truck, Award, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No preservatives, no additives. Pure milk and dairy products from healthy cows and buffaloes.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    desc: "Every product is FAT/SNF tested and cold-chain handled before delivery.",
  },
  {
    icon: Truck,
    title: "Daily Home Delivery",
    desc: "Fresh milk delivered before 9 AM to Kochas, Dinara, Delhuan, and nearby villages.",
  },
  {
    icon: ShoppingCart,
    title: "Easy Ordering",
    desc: "Add to cart on website or order directly via WhatsApp — quick and simple.",
  },
];

const ProductsPage = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main>
      <HeroSection
        id="products-hero"
        slides={[
          {
            image: 'https://i.postimg.cc/2SF6CJ7y/sudah_dana_daelhuan_dairy.png',
            title: "Fresh Dairy Products in Kochas, Rohtas",
            subtitle: "Cow milk, buffalo milk, ghee, curd & cattle feed — order online",
          },
        ]}
        eyebrow="Our Products"
        supportingText="Farm-fresh dairy products from Delhuan village, crafted with care and delivered across Kochas, Dinara, and Rohtas district, Bihar."
        heightClass="min-h-[80vh]"
      />

      {/* Intro */}
      <section className="pt-14 pb-16 bg-gradient-to-tr from-accent/15 via-background to-background">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.6em] text-primary mb-4 font-semibold">Our Products</p>
          <div className="grid gap-10 lg:grid-cols-2 items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Crafted in Delhuan, delivered across Bihar.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We process every order with hygienic infrastructure, rapid chilling, and strict
                quality checks so your kitchen, shop, or business receives consistent taste and
                nutrition. From pure cow milk to premium ghee and cattle feed — all available online.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Add products to your cart, choose quantity, and place your order via WhatsApp in
                seconds. Free delivery on orders above ₹500 in Kochas, Dinara, and Delhuan area.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-primary/15 bg-card p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductsSection />

      <AdComponent slot="XXXXXXXXXX" className="container mx-auto px-4" />

      <SubscriptionCard />
      <MilkRateSection />
    </main>
    <Footer />
    <ScrollToTop />
    <FloatingButtons />
  </div>
);

export default ProductsPage;
