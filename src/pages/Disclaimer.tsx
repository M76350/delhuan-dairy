import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">Disclaimer</h1>
        <p className="text-muted-foreground mt-4">
          This page is a starter template. Update it to match your business and
          blog publishing process.
        </p>

        <section className="mt-8 space-y-4 text-foreground/90">
          <p>
            Information on this website is provided for general guidance. While
            we try to keep content accurate and up-to-date, we do not guarantee
            completeness or suitability for every situation.
          </p>
          <p>
            For veterinary or animal health concerns, please consult a qualified
            professional.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

