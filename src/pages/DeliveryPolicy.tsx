

import AdComponent from "@/components/AdComponent";

const SITE_NAME = "Delhuan Dairy Farm";
const PHONE = "+91-7635065908";

export default function DeliveryPolicy() {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">Delivery Policy</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: March 20, 2026
        </p>

        <AdComponent slot="XXXXXXXXXX" className="my-6" />

        <div className="mt-8 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Delivery Areas
            </h2>
            <p>
              We currently deliver to the following areas in Rohtas district,
              Bihar:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Delhuan Village</li>
              <li>Kochas Town</li>
              <li>Dinara (Dinara Thana area)</li>
              <li>Nearby villages within 10 km radius</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              For delivery availability in your area, please contact us on
              WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Delivery Schedule
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Daily Milk Delivery:</strong> 6:00 AM â€“ 9:00 AM, 7
                days a week including Sundays and public holidays.
              </li>
              <li>
                <strong>Other Products (Ghee, Curd, Khoa):</strong> Delivered
                within 24â€“48 hours of order confirmation.
              </li>
              <li>
                <strong>Cattle Feed (Sudha Dana):</strong> Delivered within
                2â€“3 business days for bulk orders.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Delivery Charges
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Free delivery</strong> on orders above â‚¹500.
              </li>
              <li>
                Orders below â‚¹500: â‚¹20 delivery charge applies.
              </li>
              <li>
                Subscription plan customers get free delivery regardless of
                order value.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Delivery Instructions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Please ensure someone is available to receive the delivery or
                provide a safe drop-off location.
              </li>
              <li>
                Milk is delivered in sealed, hygienic containers. Please
                refrigerate immediately upon receipt.
              </li>
              <li>
                If you need to skip a delivery, inform us at least 12 hours in
                advance via WhatsApp.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Delays & Exceptions
            </h2>
            <p>
              While we strive for on-time delivery, delays may occur due to
              extreme weather, festivals, or unforeseen circumstances. We will
              notify you via WhatsApp in case of any significant delay.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Contact
            </h2>
            <address className="not-italic space-y-1 text-sm">
              <p>
                WhatsApp / Phone:{" "}
                <a href={`tel:${PHONE}`} className="text-primary underline">
                  {PHONE}
                </a>
              </p>
              <p>Available: 6 AM â€“ 8 PM, 7 days a week</p>
            </address>
          </section>
        </div>
      </main>
      
    </div>
  );
}
