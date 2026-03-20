import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdComponent from "@/components/AdComponent";

const SITE_NAME = "Delhuan Dairy Farm";
const PHONE = "+91-7635065908";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">Refund Policy</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: March 20, 2026
        </p>

        <AdComponent slot="XXXXXXXXXX" className="my-6" />

        <div className="mt-8 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Our Refund Commitment
            </h2>
            <p>
              At {SITE_NAME}, we are committed to delivering the highest quality
              dairy products. If you are not satisfied with your purchase, we
              will work with you to resolve the issue fairly and promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Eligibility for Refund
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Quality complaints (sour milk, wrong product, contamination)
                must be reported within <strong>2 hours of delivery</strong>{" "}
                with photo/video evidence via WhatsApp.
              </li>
              <li>
                Subscription cancellations requested at least{" "}
                <strong>24 hours before</strong> the next billing cycle are
                eligible for a pro-rated refund of unused days.
              </li>
              <li>
                Duplicate payments or technical payment errors are fully
                refundable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Non-Refundable Cases
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Products already consumed or partially used.</li>
              <li>
                Complaints raised after 2 hours of delivery without valid
                evidence.
              </li>
              <li>
                Subscription cancellations requested less than 24 hours before
                the next billing cycle.
              </li>
              <li>
                Delivery failures due to incorrect address provided by the
                customer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Refund Process
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Contact us via WhatsApp at{" "}
                <a href="https://wa.me/917635065908" className="text-primary underline">
                  {PHONE}
                </a>{" "}
                with your order details and issue description.
              </li>
              <li>
                Our team will review your request within 24 hours.
              </li>
              <li>
                Approved refunds are processed within{" "}
                <strong>5–7 business days</strong> to the original payment
                method (Razorpay/UPI/bank account).
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Contact for Refunds
            </h2>
            <address className="not-italic space-y-1 text-sm">
              <p>WhatsApp / Phone: <a href={`tel:${PHONE}`} className="text-primary underline">{PHONE}</a></p>
              <p>Available: Monday – Sunday, 6 AM – 8 PM</p>
            </address>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
