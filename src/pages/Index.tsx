import React from 'react';
import { ShoppingCart, Bell } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import MilkRateSection from '@/components/MilkRateSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';
import LeadershipTeam from '@/components/LeadershipTeam';
import CustomerTestimonials from '@/components/CustomerTestimonials';
import SubscriptionCard from '@/components/SubscriptionCard';
import AdComponent from '@/components/AdComponent';
import heroImage1 from '@/assets/hero-dairy-1.jpg';
import heroImage2 from '@/assets/hero-dairy-2.jpg';
import heroImage3 from '@/assets/hero-dairy-3.jpg';
import { Button } from '@/components/ui/button';

const Index = () => (
  <div className="overflow-x-hidden">
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

    <div className="container mx-auto px-4">
      <AdComponent slot="XXXXXXXXXX" />
    </div>

    <MilkRateSection />
    <ProductsSection />

    <div className="container mx-auto px-4">
      <AdComponent slot="XXXXXXXXXX" />
    </div>

    <SubscriptionCard />
    <CustomerTestimonials />
    <LeadershipTeam />
    <ContactSection />
  </div>
);

export default Index;
