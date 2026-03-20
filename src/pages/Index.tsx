import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingCart, Bell } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MilkRateSection from '@/components/MilkRateSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import InquiryPopup from '@/components/InquiryPopup';
import LeadershipTeam from '@/components/LeadershipTeam';
import ScrollToTop from '@/components/ScrollToTop';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import SubscriptionCard from '@/components/SubscriptionCard';
import AdComponent from '@/components/AdComponent';
import heroImage1 from '@/assets/hero-dairy-1.jpg';
import heroImage2 from '@/assets/hero-dairy-2.jpg';
import heroImage3 from '@/assets/hero-dairy-3.jpg';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showInquiryPopup, setShowInquiryPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasShownPopup = localStorage.getItem('inquiryPopupShown');
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowInquiryPopup(true);
        localStorage.setItem('inquiryPopupShown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
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
      <div className="min-h-screen">
        <Header />
        <HeroSection
          id="home"
          slides={[
            {
              image: heroImage2,
              title: 'Fresh Milk Delivery in Kochas',
              subtitle: 'Pure cow & buffalo milk — delivered to your door every morning',
            },
            {
              image: heroImage3,
              title: 'Best Animal Care in Rohtas',
              subtitle: 'Professional veterinary services & semen processing',
            },
            {
              image: heroImage1,
              title: 'Dairy Near Me — Delhuan Dairy Farm',
              subtitle: 'Serving Delhuan, Kochas & Dinara with premium dairy products',
            },
          ]}
          supportingText="Connected to Sudha Plant Kochas, Head Center Ara, Bihar — serving Delhuan village with premium dairy services and attentive animal care."
          actions={
            <>
              <Button
                size="lg"
                className="premium-gradient text-white font-semibold px-8 py-4 text-lg hover-lift"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white font-semibold px-8 py-4 text-lg hover:bg-white/20 hover-lift"
                onClick={() => document.getElementById('subscriptions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Bell className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
            </>
          }
          heightClass="h-screen"
          showScrollIndicator
        />

        {/* Ad — between hero and milk rate */}
        <div className="container mx-auto px-4">
          <AdComponent slot="XXXXXXXXXX" />
        </div>

        <MilkRateSection />
        <ProductsSection />

        {/* Ad — between products and subscriptions */}
        <div className="container mx-auto px-4">
          <AdComponent slot="XXXXXXXXXX" />
        </div>

        <SubscriptionCard />
        <CustomerTestimonials />
        <LeadershipTeam />
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
