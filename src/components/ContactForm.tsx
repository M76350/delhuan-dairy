
import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { z } from "zod";

/* ---------------- VALIDATION ---------------- */
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().regex(/^[+]?[\d\s-]{10,15}$/),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ POPUP STATE (ONLY ADDITION)
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: any = {};
        err.errors.forEach((e) => {
          newErrors[e.path[0]] = e.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new",
        source: "Delhuan Village Website",
      });

      setSubmitStatus("success");
      setShowPopup(true); // ✅ OPEN POPUP

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err: any) {
      console.error("Firebase error:", err);
      setSubmitStatus("error");
      setErrorMessage(
        err?.message || "Failed to send message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-500">
      {/* HEADER */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-4">
          <MessageSquare className="h-7 w-7" />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          Contact Us
          <Sparkles className="h-6 w-6 text-accent" />
        </h3>
        <p className="text-sm text-muted-foreground">
          📩 Fill the form below and we'll get back to you soon!
        </p>
      </div>

      {/* ERROR */}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-xl flex items-center gap-3">
          <AlertCircle className="h-6 w-6 text-destructive" />
          <p className="text-sm text-destructive">{errorMessage}</p>
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* NAME */}
        <div>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.name ? "border-destructive" : "border-border"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? "border-destructive" : "border-border"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone * (e.g., +91 1234567890)"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.phone ? "border-destructive" : "border-border"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone}</p>
          )}
        </div>

        {/* SUBJECT */}
        <div>
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.subject ? "border-destructive" : "border-border"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
          />
          {errors.subject && (
            <p className="text-sm text-destructive mt-1">{errors.subject}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your Message *"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message ? "border-destructive" : "border-border"
            } focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-4 rounded-xl flex justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send /> Send Message
            </>
          )}
        </button>
      </form>

      {/* ================= SUCCESS POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-background rounded-3xl px-8 py-10 w-[90%] max-w-md text-center shadow-strong">
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 rounded-full bg-green-500/15 flex items-center justify-center animate-success-scale">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-3">
              🎉 Congratulations!
            </h2>

            <p className="text-muted-foreground mb-8">
              You are successfully connected with us.
              <br />
              We will contact you very soon 🤝
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-4 rounded-xl bg-green-500 text-white font-semibold "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
