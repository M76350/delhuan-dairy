import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mt-4">
          This page is a starter template. Update it based on how you collect
          inquiries, phone/WhatsApp clicks, login/profile data, analytics, etc.
        </p>

        <section className="mt-8 space-y-4 text-foreground/90">
          <p>
            We may collect information you submit through contact forms (such as
            name, phone number, and message) to respond to your inquiry.
          </p>
          <p>
            We may use analytics to understand site traffic and improve our
            services.
          </p>
          <p>
            If you have questions, please contact Delhuan Dairy Farm.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

