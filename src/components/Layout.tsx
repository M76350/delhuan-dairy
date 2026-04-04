import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import InquiryPopup from "@/components/InquiryPopup";

const Layout: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // Show inquiry popup once per session on homepage
  useEffect(() => {
    if (location.pathname !== "/") return;
    const shown = localStorage.getItem("inquiryPopupShown");
    if (!shown) {
      const t = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("inquiryPopupShown", "true");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  // Hide header/footer on login page
  const hideChrome = location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      {!hideChrome && <Header />}

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideChrome && <Footer />}
      {!hideChrome && <ScrollToTop />}
      {!hideChrome && <FloatingButtons />}
      {!hideChrome && (
        <InquiryPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default Layout;
