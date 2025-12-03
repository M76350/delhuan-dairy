import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import ProductsSection from "@/components/ProductsSection";
import MilkRateSection from "@/components/MilkRateSection";
import dairyProducts from "@/assets/dairy-products.jpg";

const ProductsPage = () => {
  const featuredProducts = [
    { title: "Farm-fresh milk", detail: "Cow & buffalo milk with daily cold-chain dispatches." },
    { title: "Premium ghee", detail: "Slow-cooked batches with lab-tested purity and aroma." },
    { title: "Value-added dairy", detail: "Paneer, curd, khoa, and customizable bulk orders." }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection
          id="products-hero"
          slides={[
            {
              // image: dairyProducts,
              image:'https://i.postimg.cc/2SF6CJ7y/sudah_dana_daelhuan_dairy.png',
              title: "Premium dairy from Delhuan",
              subtitle: "Milk, ghee, paneer, butter and more for homes & businesses",
            },
          ]}
          eyebrow="Our Products"
          supportingText="Crafted in Delhuan and supplied across Bihar with strict cold-chain and quality checks."
          heightClass="min-h-[90vh]"
        />

        <section className="pt-10 pb-16 bg-gradient-to-tr from-accent/15 via-background to-background">
          <div className="max-w-6xl mx-auto px-4  ">
            <p className="text-xs uppercase tracking-[0.5em] text-accent mb-4">Our Products</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Crafted in Delhuan, delivered across Bihar.</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              We process every order with hygienic infrastructure, rapid chilling, and strict quality checks so
              your kitchen, shop, or business receives consistent taste and nutrition.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {featuredProducts.map((product) => (
                <div key={product.title} className="rounded-2xl border border-white/10 bg-card/90 p-5 shadow-lg shadow-accent/10">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{product.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductsSection />
        <MilkRateSection />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingButtons />
    </div>
  );
};

export default ProductsPage;

