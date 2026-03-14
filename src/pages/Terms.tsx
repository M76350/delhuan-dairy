import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">
          Terms &amp; Conditions
        </h1>
        <p className="text-muted-foreground mt-4">
          This page is a starter template. Replace it with your final terms for
          service usage, inquiries, and content publishing on the blog.
        </p>

        <section className="mt-8 space-y-4 text-foreground/90">
          <p>
            By using this website, you agree not to misuse the content or
            services, and you accept that information may change without notice.
          </p>
          <p>
            For urgent orders or support, please contact Delhuan Dairy Farm by
            phone/WhatsApp.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

