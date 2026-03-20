import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdComponent from "@/components/AdComponent";

const SITE_NAME = "Delhuan Dairy Farm";
const PHONE = "+91-7635065908";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">Disclaimer</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: March 20, 2026
        </p>

        <AdComponent slot="XXXXXXXXXX" className="my-6" />

        <div className="mt-8 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              General Information
            </h2>
            <p>
              The information provided on the {SITE_NAME} website is for
              general informational purposes only. While we strive to keep the
              information accurate and up-to-date, we make no representations
              or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, or suitability of the
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Product Information
            </h2>
            <p>
              Product prices, availability, and specifications are subject to
              change without notice. Images shown are for illustrative purposes
              and may differ slightly from the actual product. Nutritional
              values and quality metrics are approximate and may vary by season
              and batch.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Veterinary & Animal Health Content
            </h2>
            <p>
              Blog articles and content related to animal health, veterinary
              care, and cattle management are provided for general guidance
              only. They do not constitute professional veterinary advice. For
              specific animal health concerns, always consult a qualified
              veterinarian.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              External Links
            </h2>
            <p>
              Our website may contain links to external websites. These links
              are provided for convenience only. {SITE_NAME} has no control
              over the content of those sites and accepts no responsibility for
              them or for any loss or damage that may arise from your use of
              them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Advertising Disclaimer
            </h2>
            <p>
              This website displays advertisements served by Google AdSense and
              other third-party networks. {SITE_NAME} is not responsible for
              the content of these advertisements. The display of an
              advertisement does not constitute an endorsement of the advertised
              product or service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Contact
            </h2>
            <p>
              For any questions regarding this disclaimer, contact us at{" "}
              <a href={`tel:${PHONE}`} className="text-primary underline">
                {PHONE}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
