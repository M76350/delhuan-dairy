import React, { useEffect } from "react";

export default function CaptchaForm() {
  useEffect(() => {
    // Wait until grecaptcha is available
    const interval = setInterval(() => {
      if ((window as any).grecaptcha) {
        (window as any).grecaptcha.render("recaptcha-container", {
          sitekey: "6Legc8ErAAAAAD83VNTg6YUtpPf3v3Zc3ZaJT8UM", // apna site key
        });
        clearInterval(interval); // stop checking
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const grecaptcha = (window as any).grecaptcha;
    if (!grecaptcha) {
      alert("⚠️ reCAPTCHA not loaded yet!");
      return;
    }

    const response = grecaptcha.getResponse();
    if (!response) {
      alert("⚠️ Please verify you are not a robot!");
    } else {
      alert("✅ Form submitted (frontend only, no backend verification)");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />

      {/* reCAPTCHA widget render hoga yaha */}
      <div id="recaptcha-container"></div>

      <button type="submit">Submit</button>
    </form>
  );
}
