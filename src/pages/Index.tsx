import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import MilkRateSection from '@/components/MilkRateSection';
import ProductsSection from '@/components/ProductsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import InquiryPopup from '@/components/InquiryPopup';
import LeadershipTeam from '@/components/LeadershipTeam';
import LoyalCustomers from '@/components/LoyalCustomers';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [showInquiryPopup, setShowInquiryPopup] = useState(false);

  useEffect(() => {
    // Show inquiry popup after 2 seconds when page loads for the first time
    const hasShownPopup = localStorage.getItem('inquiryPopupShown');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowInquiryPopup(true);
        localStorage.setItem('inquiryPopupShown', 'true');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    // setShowInquiryPopup(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MilkRateSection />
      <ProductsSection />
      <LeadershipTeam />
      <LoyalCustomers />
      <GallerySection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <FloatingButtons />
      <InquiryPopup 
        isOpen={showInquiryPopup} 
        onClose={() => setShowInquiryPopup(false)} 
      />
    </div>
  );
};

export default Index;
