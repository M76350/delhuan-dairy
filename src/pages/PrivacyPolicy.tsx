

import AdComponent from "@/components/AdComponent";

const SITE_NAME = "Delhuan Dairy Farm";
const SITE_URL = "https://delhuan-dairy.netlify.app";
const CONTACT_EMAIL = "delhuandairy@gmail.com";
const PHONE = "+91-7635065908";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Last updated: March 20, 2026
        </p>

        <AdComponent slot="XXXXXXXXXX" className="my-6" />

        <div className="mt-8 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>{SITE_NAME}</strong> ("{SITE_URL}"). We are
              committed to protecting your personal information and your right to
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, phone number, email
                address, and message when you submit our contact or inquiry
                form.
              </li>
              <li>
                <strong>Order Information:</strong> Product preferences and
                delivery details when you place an order via WhatsApp or our
                order form.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent, browser
                type, and device information collected automatically via
                analytics tools (e.g., Google Analytics).
              </li>
              <li>
                <strong>Cookies:</strong> Small data files stored on your
                device to improve your browsing experience and serve relevant
                advertisements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and process orders.</li>
              <li>
                To send you updates about our products, services, and milk
                rates (only if you opt in).
              </li>
              <li>
                To improve our website content and user experience.
              </li>
              <li>
                To display relevant advertisements via Google AdSense.
              </li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Google AdSense & Third-Party Advertising
            </h2>
            <p>
              We use Google AdSense to display advertisements on our website.
              Google may use cookies to serve ads based on your prior visits to
              our website or other websites. You can opt out of personalized
              advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Google Ads Settings
              </a>
              . Third-party vendors, including Google, use cookies to serve ads
              based on a user's prior visits to our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your experience. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent. However, if you do not accept cookies, some
              portions of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Data Sharing & Disclosure
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share data with trusted service providers (e.g.,
              Firebase, Razorpay, Google Analytics) solely to operate our
              website and services, under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the Internet
              is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Children's Privacy
            </h2>
            <p>
              Our website is not directed to children under 13. We do not
              knowingly collect personal information from children. If you
              believe we have inadvertently collected such information, please
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. To exercise these rights, contact us at the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact:
            </p>
            <address className="not-italic mt-2 space-y-1 text-sm">
              <p>
                <strong>{SITE_NAME}</strong>
              </p>
              <p>Delhuan Village, Dinara Thana, Rohtas, Bihar â€“ 821307</p>
              <p>
                Phone/WhatsApp:{" "}
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
