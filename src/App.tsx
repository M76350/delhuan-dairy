import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("isVerified");
    if (verified === "true") setIsVerified(true);
  }, []);

  const handleCaptcha = (value) => {
    if (value) {
      setIsVerified(true);
      localStorage.setItem("isVerified", "true");
    }
  };

  // Agar user verify nahi hua → show captcha
  if (!isVerified) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>⚠️ Please verify you are not a robot</h2>
        <div style={{ display: "inline-block", marginTop: "20px" }}>
          <ReCAPTCHA
            sitekey="YOUR_SITE_KEY_HERE" // <-- Yahan apna SITE_KEY daalo
            onChange={handleCaptcha}
          />
        </div>
      </div>
    );
  }

  // User verified → render normal app
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
