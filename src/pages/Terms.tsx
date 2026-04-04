

import AdComponent from "@/components/AdComponent";

const SITE_NAME = "Delhuan Dairy Farm";
const PHONE = "+91-7635065908";
const CONTACT_EMAIL = "delhuandairy@gmail.com";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">
          Terms &amp; Conditions
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: March 20, 2026
        </p>

        <AdComponent slot="XXXXXXXXXX" className="my-6" />

        <div className="mt-8 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the {SITE_NAME} website, you accept and
              agree to be bound by these Terms and Conditions. If you do not
              agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Products & Services
            </h2>
            <p>
              {SITE_NAME} offers fresh dairy products including cow milk,
              buffalo milk, ghee, curd, and cattle feed. Product availability,
              prices, and delivery areas are subject to change without prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Orders & Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Orders can be placed via WhatsApp, phone call, or our website
                order form.
              </li>
              <li>
                Online payments are processed securely through Razorpay. We do
                not store your payment card details.
              </li>
              <li>
                Subscription plans are billed in advance (weekly or monthly).
              </li>
              <li>
                Prices displayed are inclusive of applicable taxes unless
                stated otherwise.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Delivery Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We deliver within Delhuan village and nearby areas (Kochas,
                Dinara, Rohtas district).
              </li>
              <li>
                Delivery is typically done in the early morning (6 AM â€“ 9 AM).
              </li>
              <li>
                Free delivery on orders above â‚¹500. Delivery charges may apply
                for smaller orders.
              </li>
              <li>
                We are not responsible for delays caused by unforeseen
                circumstances (weather, festivals, etc.).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Refund & Cancellation
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Subscription cancellations must be requested at least 24 hours
                before the next billing cycle via WhatsApp or phone.
              </li>
              <li>
                Refunds for unused subscription days will be processed within
                5â€“7 business days to the original payment method.
              </li>
              <li>
                No refunds for products already delivered unless there is a
                quality issue reported within 2 hours of delivery.
              </li>
              <li>
                Quality complaints must be reported with photo evidence via
                WhatsApp.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website â€” including text, images, logos, and
              blog articles â€” is the property of {SITE_NAME} and may not be
              reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              {SITE_NAME} shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or
              services. Our maximum liability is limited to the amount paid for
              the specific product or service in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of courts in Rohtas,
              Bihar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Contact
            </h2>
            <address className="not-italic mt-2 space-y-1 text-sm">
              <p>
                <strong>{SITE_NAME}</strong>
              </p>
              <p>Delhuan Village, Dinara Thana, Rohtas, Bihar â€“ 821307</p>
              <p>
                Phone:{" "}
                <a href={`tel:${PHONE}`} className="text-primary underline">
                  {PHONE}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </address>
          </section>
        </div>
      </main>
      
    </div>
  );
}
