import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
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
import heroImage1 from '@/assets/hero-dairy-1.jpg';
import heroImage2 from '@/assets/hero-dairy-2.jpg';
import heroImage3 from '@/assets/hero-dairy-3.jpg';
// import heroImage4 from '@/assets/delhuan-happy-new-year.png';
import heroImage5 from '@/assets/delhuan-village.png';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showInquiryPopup, setShowInquiryPopup] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    const sectionId = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.pathname]);

  return (
    <div className="overflow-x-hidden">
    <div className="min-h-screen ">
      <Header />
      <HeroSection
        id="home"
        slides={[
          // {
          //   image: heroImage4,
          //   title: '2026 Delhuan dairy farm',
          //   subtitle: 'Delhuan dairy farm & milk collection center',
          // },
          {
            image: heroImage2,
            title: 'Top dairy farm in Rohtas',
            subtitle: 'Global member of Sudha dairy plant apart from Ara',
          },
          {
            image: heroImage3,
            title: 'Best animal care in Rohtas',
            subtitle: 'Professional semen processing & veterinary services',
          },
          {
            image: heroImage1,
            title: 'Happy new year 2026',
            subtitle: 'Delhuan dairy farm is wising you a very happy new to all of you ',
          },
        ]}
        supportingText="Connected to Sudha Plant Kochas, Head Center Ara, Bihar - serving Delhuan village with premium dairy services and attentive animal care."
        actions={
          <Button
            size="lg"
            className="accent-gradient text-black font-semibold px-8 py-4 text-lg hover-lift"
            onClick={() => document.getElementById('milk-rate')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            Check Milk Rate
          </Button>
        }
        heightClass="h-screen"
        showScrollIndicator
      />
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      <MilkRateSection />
      <ProductsSection />
      <LeadershipTeam />
      {/* <LoyalCustomers /> */}
      {/* <GallerySection /> */}
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <FloatingButtons />
      <InquiryPopup 
        isOpen={showInquiryPopup} 
        onClose={() => setShowInquiryPopup(false)} 
      />
    </div>
    </div>
  );
};

export default Index;
